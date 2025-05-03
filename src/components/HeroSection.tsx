import React from 'react';
import Image from 'next/image';
import mobile_mockup from '../assets/mobile_mockup.png';

const HeroSection = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="font-urbanist font-bold text-[35px] leading-[100%] tracking-[0%] align-middle text-white">
              Want to Turn Social Media Into a Profitable Career?
            </h1>
            
            <h2 className="font-urbanist font-bold text-[35px] leading-[100%] tracking-[0%] align-middle text-[#00E7F9]">
              Discover your way to success with Fametonic:
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <p className="font-figtree font-semibold text-base leading-[22px] tracking-[0%] align-middle">
                  Start growing your influence right away—no waiting required!
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <p className="font-figtree font-semibold text-base leading-[22px] tracking-[0%] align-middle">
                  Create viral TikToks and Reels step by step with easy-to-follow lessons
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <p className="font-figtree font-semibold text-base leading-[22px] tracking-[0%] align-middle">
                  Use a Personal AI Worker to boost your content
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <p className="font-figtree font-semibold text-base leading-[22px] tracking-[0%] align-middle">
                  Learn from expert-led courses designed for aspiring influencers
                </p>
              </li>
            </ul>

            <div className="space-y-6">
              <button className="w-[313px] h-[40px] px-10 py-2 gap-2.5 rounded-[10px] bg-[#FC004E] shadow-[2px_2px_10px_0px_#00E7F9] text-white font-bold transition-colors duration-200">
                Get Started
              </button>

              <p className="font-figtree font-normal text-xs leading-4 tracking-[0%] text-center align-middle">
                1-minute quiz for personalized Insights
              </p>

              <p className="font-figtree font-medium text-xs leading-[100%] tracking-[0%] align-middle text-gray-500">
                By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
              </p>

              <p className="font-figtree font-medium text-xs leading-[100%] tracking-[0%] align-middle text-gray-500">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src={mobile_mockup}
                alt="Fametonic Mobile App"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
