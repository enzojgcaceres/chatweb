"use client";

// ─────────────────────────────────────────────────────────────────────────────
// LiquidEther — React Bits background component (manual install)
// Source: https://reactbits.dev/backgrounds/liquid-ether
// Dependencies: npm install ogl
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";

interface LiquidEtherProps {
  className?: string;
}

export default function LiquidEther({ className = "" }: LiquidEtherProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let animationId: number;
    let renderer: unknown;

    const init = async () => {
      try {
        // Dynamic import — requires: npm install ogl
        const { Renderer, Program, Mesh, Triangle, Color } = await import("ogl" as never) as {
          Renderer: new (opts: { width: number; height: number; dpr: number }) => {
            gl: WebGLRenderingContext & { canvas: HTMLCanvasElement };
            setSize: (w: number, h: number) => void;
            render: (opts: { scene: unknown }) => void;
          };
          Program: new (
            gl: unknown,
            opts: { vertex: string; fragment: string; uniforms: Record<string, { value: unknown }> }
          ) => unknown;
          Mesh: new (gl: unknown, opts: { geometry: unknown; program: unknown }) => {
            program: { uniforms: Record<string, { value: unknown }> };
          };
          Triangle: new (gl: unknown) => unknown;
          Color: new (hex: string) => unknown;
        };

        const container = containerRef.current!;
        const { clientWidth: width, clientHeight: height } = container;

        const renderer = new Renderer({ width, height, dpr: Math.min(window.devicePixelRatio, 2) });
        const gl = renderer.gl;
        gl.canvas.style.width = "100%";
        gl.canvas.style.height = "100%";
        container.appendChild(gl.canvas);

        // Warm amber/dark palette for Kanguro
        // const colorA = new Color("#1a1520"); // deep charcoal
        // const colorB = new Color("#3d2010"); // warm dark brown
        // const colorC = new Color("#c8850a"); // amber accent
        // const colorD = new Color("#2d1a08"); // deep brown

      //  const colorA = new Color("#0f0f0f"); // casi negro puro
      //  const colorB = new Color("#1a1a1a"); // gris carbón muy oscuro
      //  const colorC = new Color("#2e2e2e"); // gris oscuro sutil
      //  const colorD = new Color("#141414"); // negro cálido

      // const colorA = new Color("#f5f0e8"); // blanco cálido
      // const colorB = new Color("#e8e0d0"); // crema suave
      // const colorC = new Color("#d4c8b0"); // beige tenue
      // const colorD = new Color("#ede5d5"); // lino claro

      const colorA = new Color("#f0e6ff"); // lavanda muy suave
      const colorB = new Color("#ffd6f0"); // rosa pastel
      const colorC = new Color("#c8f0ff"); // celeste bebé
      const colorD = new Color("#e8f9d4"); // verde menta claro
      
        const vertex = `
          attribute vec2 uv;
          attribute vec2 position;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 0, 1);
          }
        `;

        const fragment = `
          precision highp float;
          uniform float uTime;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          uniform vec3 uColorC;
          uniform vec3 uColorD;
          uniform vec2 uResolution;
          varying vec2 vUv;

          vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
          vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
          vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
          vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

          float snoise(vec3 v) {
            const vec2 C = vec2(1.0/6.0, 1.0/3.0);
            const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
            vec3 i = floor(v + dot(v, C.yyy));
            vec3 x0 = v - i + dot(i, C.xxx);
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min(g.xyz, l.zxy);
            vec3 i2 = max(g.xyz, l.zxy);
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy;
            vec3 x3 = x0 - D.yyy;
            i = mod289(i);
            vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            float n_ = 0.142857142857;
            vec3 ns = n_ * D.wyz - D.xzx;
            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_);
            vec4 x = x_ * ns.x + ns.yyyy;
            vec4 y = y_ * ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);
            vec4 b0 = vec4(x.xy, y.xy);
            vec4 b1 = vec4(x.zw, y.zw);
            vec4 s0 = floor(b0) * 2.0 + 1.0;
            vec4 s1 = floor(b1) * 2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));
            vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
            vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
            vec3 p0 = vec3(a0.xy, h.x);
            vec3 p1 = vec3(a0.zw, h.y);
            vec3 p2 = vec3(a1.xy, h.z);
            vec3 p3 = vec3(a1.zw, h.w);
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
          }

          void main() {
            vec2 uv = vUv;
            float t = uTime * 0.12;

            float n1 = snoise(vec3(uv * 1.8, t * 0.7));
            float n2 = snoise(vec3(uv * 3.2 + 1.5, t * 0.5 + 1.0));
            float n3 = snoise(vec3(uv * 5.5 - 2.1, t * 0.9 + 2.5));
            float n4 = snoise(vec3(uv * 2.0 + vec2(n1 * 0.3, n2 * 0.3), t * 0.4));

            float blend1 = smoothstep(-0.3, 0.6, n1 + n4 * 0.4);
            float blend2 = smoothstep(-0.5, 0.5, n2 * 0.7 + n3 * 0.3);
            float blend3 = smoothstep(0.0, 1.0, n3 * 0.5 + n1 * 0.3 + 0.2);

            vec3 col = mix(uColorA, uColorB, blend1);
            col = mix(col, uColorC, blend2 * 0.4); // subtle amber veining
            col = mix(col, uColorD, blend3 * 0.6);

            // Amber shimmer veins
            float vein = smoothstep(0.75, 0.85, abs(n2));
            col = mix(col, uColorC * 0.6, vein * 0.35);

            gl_FragColor = vec4(col, 1.0);
          }
        `;

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
          vertex,
          fragment,
          uniforms: {
            uTime: { value: 0 },
            uResolution: { value: [width, height] },
            uColorA: { value: colorA },
            uColorB: { value: colorB },
            uColorC: { value: colorC },
            uColorD: { value: colorD },
          },
        });

        const mesh = new Mesh(gl, { geometry, program });

        const handleResize = () => {
          if (!container) return;
          const w = container.clientWidth;
          const h = container.clientHeight;
          renderer.setSize(w, h);
          (mesh.program.uniforms.uResolution as { value: number[] }).value = [w, h];
        };
        window.addEventListener("resize", handleResize);

        let time = 0;
        const animate = () => {
          animationId = requestAnimationFrame(animate);
          time += 0.016;
          (mesh.program.uniforms.uTime as { value: number }).value = time;
          renderer.render({ scene: mesh });
        };
        animate();

        return () => {
          window.removeEventListener("resize", handleResize);
          cancelAnimationFrame(animationId);
          if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas);
        };
      } catch (err) {
        console.warn("LiquidEther: ogl not installed. Run: npm install ogl", err);
      }
    };

    const cleanup = init();
    return () => {
      cleanup.then((fn) => fn && fn());
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "absolute", inset: 0 }}
    />
  );
}
