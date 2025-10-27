"use client"

import React, { useRef, useEffect } from "react"
import * as THREE from "three"

interface CelestialSphereProps {
  hue?: number
  speed?: number
  zoom?: number
  particleSize?: number
  className?: string
}

export const CelestialSphere: React.FC<CelestialSphereProps> = ({
  hue = 30.0, // Orange/brown hue
  speed = 0.3,
  zoom = 1.5,
  particleSize = 3.0,
  className = "",
}) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const currentMount = mountRef.current
    let scene: THREE.Scene, camera: THREE.OrthographicCamera, renderer: THREE.WebGLRenderer, material: THREE.ShaderMaterial, mesh: THREE.Mesh
    let animationFrameId: number
    const mouse = new THREE.Vector2(0.5, 0.5)

    // --- Shaders ---
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      varying vec2 vUv;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform float u_hue;
      uniform float u_zoom;
      uniform float u_particle_size;

      // HSL to RGB conversion
      vec3 hsl2rgb(vec3 c) {
        vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
        return c.z * mix(vec3(1.0), rgb, c.y);
      }

      // 2D Random function
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      // 2D Noise function
      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.y * u.x;
      }

      // Fractional Brownian Motion
      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 6; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
        uv *= u_zoom;

        // Warp effect based on mouse
        vec2 mouse_normalized = u_mouse / u_resolution;
        uv += (mouse_normalized - 0.5) * 0.8;

        // Time-varying noise for nebula clouds
        float f = fbm(uv + vec2(u_time * 0.1, u_time * 0.05));
        float t = fbm(uv + f + vec2(u_time * 0.05, u_time * 0.02));
        
        // Final color calculation with brand palette
        float nebula = pow(t, 2.0);
        
        // Create gold/brown gradient using brand colors
        vec3 deepBrown = vec3(0.329, 0.275, 0.161);  // #544629
        vec3 luminousGold = vec3(0.702, 0.553, 0.220); // #b38d38
        vec3 baseColor = mix(deepBrown, luminousGold, nebula);
        
        // Add subtle variation
        vec3 color = baseColor * (nebula * 2.0 + 0.3);
        
        // Add warm glow
        float glow = smoothstep(0.0, 1.0, nebula);
        color += luminousGold * glow * 0.3;

        // Starfield (golden stars)
        float star_val = random(vUv * 500.0);
        if (star_val > 0.998) {
            float star_brightness = (star_val - 0.998) / 0.002;
            color += luminousGold * (star_brightness * u_particle_size * 0.8);
        }

        gl_FragColor = vec4(color, 1.0);
      }
    `

    // --- Scene Initialization ---
    const init = () => {
      scene = new THREE.Scene()
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      currentMount.appendChild(renderer.domElement)

      material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          u_time: { value: 0.0 },
          u_resolution: { value: new THREE.Vector2() },
          u_mouse: { value: new THREE.Vector2() },
          u_hue: { value: hue },
          u_zoom: { value: zoom },
          u_particle_size: { value: particleSize },
        },
      })

      const geometry = new THREE.PlaneGeometry(2, 2)
      mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      addEventListeners()
      resize()
      animate()
    }

    // --- Animation Loop ---
    const animate = () => {
      material.uniforms.u_time.value += 0.005 * speed
      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    // --- Event Handlers ---
    const resize = () => {
      const { clientWidth, clientHeight } = currentMount
      renderer.setSize(clientWidth, clientHeight)
      material.uniforms.u_resolution.value.set(clientWidth, clientHeight)
      camera.updateProjectionMatrix()
    }

    const onMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
      material.uniforms.u_mouse.value.set(mouse.x, currentMount.clientHeight - mouse.y)
    }

    const addEventListeners = () => {
      window.addEventListener("resize", resize)
      window.addEventListener("mousemove", onMouseMove)
    }

    const removeEventListeners = () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
    }

    init()

    // --- Cleanup ---
    return () => {
      removeEventListeners()
      cancelAnimationFrame(animationFrameId)
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [hue, speed, zoom, particleSize])

  return <div ref={mountRef} className={className || "w-full h-full"} />
}

export default CelestialSphere
