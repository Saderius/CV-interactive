import { Printer, Download, ExternalLink } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

export default function App() {
  const printRequested = useRef(false);

  useEffect(() => {
    if (window.location.search.includes('print=1') && !printRequested.current) {
      printRequested.current = true;
      setTimeout(() => {
        window.print();
      }, 500);
    }
  }, []);

  const handlePrint = () => {
    if (window.self !== window.top) {
      const url = new URL(window.location.href);
      url.searchParams.set('print', '1');
      window.open(url.href, "_blank");
    } else {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-bento-bg font-sans cv-page-container print:bg-white text-bento-primary print:text-black">
      <div className="flex flex-col lg:flex-row gap-4 max-w-[1024px] mx-auto p-4 md:p-6 print:flex-row print:max-w-none print:w-full print:p-0 print:gap-4 print:text-black">
        
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-1 lg:w-3/12 print:w-[30%]">
          
          {/* Profile Card */}
          <div className="bg-bento-primary text-white border-none rounded-[20px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between print:text-black print:border-none print:bg-white print:rounded-none print:shadow-none print:mb-0 print:break-inside-avoid print:p-0">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[1px] text-white/60 print:text-bento-text-sec mb-2">INTRODUCTION</div>
              <h1 className="text-[28px] font-bold mb-1 mt-3 leading-none print:text-black">Patryk<br/>Mroziński</h1>
              <p className="text-[14px] text-white/80 print:text-black mb-3">Game Developer & UI/UX Designer</p>
              <div className="mt-6 text-[12px] opacity-90 print:opacity-100 print:text-black leading-[1.6]">
                I design and build polished, intuitive websites and web applications. Leveraging a strong background in UI design and shipping real products in the games industry, I now focus on creating engaging frontend experiences that blend clean code with user-centric design.
              </div>
            </div>
            <div className="mt-8 pt-4 text-[12px] opacity-70 print:opacity-100 print:text-black flex flex-col gap-1.5 border-t border-white/10 print:border-bento-border print:pt-2">
              <div>Poland</div>
              <div>+48 725 563 053</div>
              <div>saderiusishere@gmail.com</div>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-bento-card border border-bento-border rounded-[20px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col print:border-none print:shadow-none print:mb-0 print:break-inside-avoid print:p-0">
            <div className="text-[11px] font-bold uppercase tracking-[1px] text-bento-text-sec mb-4">Education</div>
            <div>
              <div className="mb-3 border-l-2 border-bento-primary pl-3 last:mb-0">
                <div className="font-semibold text-[14px] text-bento-primary mb-1">B.Sc. Medicinal Chemistry</div>
                <div className="text-[12px] text-bento-text-sec flex flex-col gap-1">
                  <span>Jagiellonian University, Kraków</span>
                  <span>2015 — 2021</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="bg-bento-card border border-bento-border rounded-[20px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col print:border-none print:shadow-none print:mb-0 print:break-inside-avoid print:p-0">
            <div className="text-[11px] font-bold uppercase tracking-[1px] text-bento-text-sec mb-4">Languages</div>
            <div className="text-[12px] flex flex-col gap-2">
              <div className="flex justify-between border-b border-bento-border/50 pb-2">
                <span className="font-semibold">Polish</span>
                <span className="text-bento-text-sec">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">English</span>
                <span className="text-bento-text-sec">C1</span>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4 flex-[2] lg:w-6/12 print:w-[45%]">
          
          {/* Experience Card */}
          <div className="bg-bento-card border border-bento-border rounded-[20px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col print:border-none print:shadow-none print:mb-0 print:break-inside-avoid print:p-0">
            <div className="text-[11px] font-bold uppercase tracking-[1px] text-bento-text-sec mb-5">Professional Experience</div>
            
            <div className="mb-4 border-l-2 border-bento-border pl-3 last:mb-0">
              <div className="text-[12px] text-bento-text-sec flex justify-between mb-1 gap-2">
                <span>Freelance</span>
                <span className="shrink-0">Aug 2023 — Present</span>
              </div>
              <div className="font-semibold text-[14px] text-bento-primary mb-1">Web Developer & Designer</div>
              <div className="text-[12px] leading-[1.4] text-[#475569]">
                Designing and developing custom websites, portfolios, and web applications. Translating UI/UX mockups into responsive, accessible interfaces using modern frontend technologies.
              </div>
            </div>

            <div className="mb-4 border-l-2 border-bento-border pl-3 last:mb-0">
              <div className="text-[12px] text-bento-text-sec flex justify-between mb-1 gap-2">
                <span>MadMind Studio, Poland</span>
                <span className="shrink-0">Jan 2022 — Jul 2023</span>
              </div>
              <div className="font-semibold text-[14px] text-bento-primary mb-1">Game Designer</div>
              <div className="text-[12px] leading-[1.4] text-[#475569]">
                Designed immersive, intuitive UI for Agony: Lords of Hell — led Kickstarter campaign UX and pitch materials. Owned design-to-production pipeline. Drove idea generation, rapid prototyping, and content validation cycles.
              </div>
            </div>

            <div className="mb-4 border-l-2 border-bento-border pl-3 last:mb-0">
              <div className="text-[12px] text-bento-text-sec flex justify-between mb-1 gap-2">
                <span>MadMind Studio, Poland</span>
                <span className="shrink-0">Jan 2021 — Mar 2023</span>
              </div>
              <div className="font-semibold text-[14px] text-bento-primary mb-1">QA Test Lead</div>
              <div className="text-[12px] leading-[1.4] text-[#475569]">
                Shipped Succubus to 80%+ positive on Steam via systemic QA overhaul. Built a Python automation tool for bug reporting — cut reporting time and improved dev communication. Led process improvement team; overhauled QC measures across the studio.
              </div>
            </div>

            <div className="mb-4 border-l-2 border-bento-border pl-3 last:mb-0">
              <div className="text-[12px] text-bento-text-sec flex justify-between mb-1 gap-2">
                <span>PlayWay S.A. & MadMind</span>
                <span className="shrink-0">Sep 2017 — Dec 2020</span>
              </div>
              <div className="font-semibold text-[14px] text-bento-primary mb-1">Manual QA Tester</div>
              <div className="text-[12px] leading-[1.4] text-[#475569]">
                Covered 60+ projects across PC, console and Switch — House Flipper, Car Mechanic Simulator and beyond. Built automated test scripts; documented procedures adopted by future QA cycles.
              </div>
            </div>
            
          </div>

          {/* Projects Card */}
          <div className="bg-bento-card border border-bento-border rounded-[20px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col print:border-none print:shadow-none print:mb-0 print:break-inside-avoid print:p-0">
            <div className="text-[11px] font-bold uppercase tracking-[1px] text-bento-text-sec mb-4">Open Source & Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1 print:block">
              
              <div className="border border-bento-border p-3 rounded-xl md:col-span-2 print:border-none print:p-0 print:mb-4">
                <div className="flex items-center gap-1.5 font-semibold text-[13px] text-bento-primary">
                  Scribble 
                  <span className="bg-[#f1f5f9] px-1.5 py-0.5 rounded-[4px] text-[9px] font-medium text-bento-primary print:border print:border-bento-border print:bg-white text-black">In dev</span>
                </div>
                <div className="text-[11px] text-bento-text-sec mt-1.5 leading-relaxed">
                   Visual sticky note app with a twist — designed for wrist-first interactions. Built with Jetpack Compose.
                </div>
              </div>

              <div className="border border-bento-border p-3 rounded-xl print:border-none print:p-0 print:mb-4">
                <div className="font-semibold text-[13px] text-bento-primary">WearSweeper</div>
                <div className="text-[11px] text-bento-text-sec mt-1.5 leading-relaxed">
                  Minesweeper reimagined for round watch faces — touch-optimised, fully playable on WearOS devices.
                </div>
              </div>

              <div className="border border-bento-border p-3 rounded-xl print:border-none print:p-0 print:mb-4">
                <div className="flex items-center gap-1.5 font-semibold text-[13px] text-bento-primary">
                  Blinker
                  <span className="bg-[#f1f5f9] px-1.5 py-0.5 rounded-[4px] text-[9px] font-medium text-bento-primary print:border print:border-bento-border print:bg-white text-black">Test phase</span>
                </div>
                <div className="text-[11px] text-bento-text-sec mt-1.5 leading-relaxed">
                  OSD Statistics Server for Android.
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 flex-1 lg:w-3/12 print:w-[25%]">
          
          {/* Actions Card - Hidden on print */}
          <div className="order-last lg:order-first bg-bento-card border border-bento-border rounded-[20px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col print:hidden">
            <div className="text-[11px] font-bold uppercase tracking-[1px] text-bento-text-sec mb-4">Portfolio Connectivity</div>
            <div className="flex flex-col gap-2.5">

              <button 
                onClick={handlePrint}
                className="flex items-center justify-center gap-2 p-3 rounded-xl text-[13px] font-semibold cursor-pointer transition-all bg-bento-primary text-white hover:bg-slate-800"
              >
                <Printer size={16} /> Print A4 CV
              </button>
              <a 
                href="./Resume_PMrodo.pdf"
                download="Resume_PMrodo.pdf"
                className="flex items-center justify-center gap-2 p-3 rounded-xl text-[13px] font-semibold cursor-pointer transition-all border border-bento-border text-bento-primary hover:bg-slate-50"
              >
                <Download size={16} /> Download PDF
              </a>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-bento-card border border-bento-border rounded-[20px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col print:border-none print:shadow-none print:mb-0 print:break-inside-avoid print:p-0">
            <div className="text-[11px] font-bold uppercase tracking-[1px] text-bento-text-sec mb-3">Technical Stack</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-[#f1f5f9] px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-bento-primary print:border print:border-bento-border print:bg-white">React</span>
              <span className="bg-[#f1f5f9] px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-bento-primary print:border print:border-bento-border print:bg-white">HTML / CSS</span>
              <span className="bg-[#f1f5f9] px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-bento-primary print:border print:border-bento-border print:bg-white">TypeScript</span>
              <span className="bg-[#f1f5f9] px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-bento-primary print:border print:border-bento-border print:bg-white">Tailwind</span>
              <span className="bg-[#f1f5f9] px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-bento-primary print:border print:border-bento-border print:bg-white">Figma</span>
              <span className="bg-[#f1f5f9] px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-bento-primary print:border print:border-bento-border print:bg-white">Python</span>
              <span className="bg-[#f1f5f9] px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-bento-primary print:border print:border-bento-border print:bg-white">Jetpack Compose</span>
              <span className="bg-[#f1f5f9] px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-bento-primary print:border print:border-bento-border print:bg-white">Unreal Engine</span>
            </div>

            <div className="text-[11px] font-bold uppercase tracking-[1px] text-bento-text-sec mt-6 mb-3">Strengths</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="border border-bento-border px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-slate-600">Web Development</span>
              <span className="border border-bento-border px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-slate-600">UI / UX Design</span>
              <span className="border border-bento-border px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-slate-600">Frontend</span>
              <span className="border border-bento-border px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-slate-600">Game design</span>
              <span className="border border-bento-border px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-slate-600">QA leadership</span>
              <span className="border border-bento-border px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium text-slate-600">Automation</span>
            </div>
          </div>

        </div>

      </div>

      {/* RODO / GDPR Clause */}
      <div className="max-w-[1024px] mx-auto p-4 md:p-6 pt-0 md:pt-0 pb-8 text-[9px] text-[#94a3b8] leading-relaxed text-justify print:p-0 print:pt-6 print:text-black print:opacity-60">
        I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).
      </div>
    </div>
  );
}
