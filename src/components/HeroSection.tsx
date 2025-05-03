import React from "react";
import Image from "next/image";
import mobile_mockup from "../assets/mobile_mockup.png";
import Container from "./HOC/Container";
import { FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="pt-[100px] mb-8">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h1 className="font-['Urbanist'] font-bold text-[35px] leading-[100%] tracking-[0%] align-middle text-white text-center lg:text-left">
                Want to Turn Social Media Into a Profitable Career?
              </h1>

              <h2 className="font-['Urbanist'] font-bold text-[35px] leading-[100%] tracking-[0%] align-middle text-[#00E7F9] [text-shadow:0px_4px_4px_#FC004E] text-center lg:text-left">
                Discover your way to success with Fametonic:
              </h2>
            </div>

            <ul className="space-y-4 flex flex-col gap-[13px]">
              <li className="flex items-start gap-x-3 mb-0">
                <span className="text-2xl">✨</span>
                <p className="font-semibold text-base leading-[22px] tracking-[0%] align-middle lg:text-left">
                  Start growing your influence right away—no waiting required!
                </p>
              </li>
              <li className="flex items-start gap-x-3 mb-0">
                <span className="text-2xl">✨</span>
                <p className="font-semibold text-base leading-[22px] tracking-[0%] align-middle lg:text-left">
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </p>
              </li>
              <li className="flex items-start gap-x-3 mb-0">
                <span className="text-2xl">✨</span>
                <p className="font-semibold text-base leading-[22px] tracking-[0%] align-middle lg:text-left">
                  Use a Personal AI Worker to boost your content
                </p>
              </li>
              <li className="flex items-start gap-x-3 mb-0">
                <span className="text-2xl">✨</span>
                <p className="font-semibold text-base leading-[22px] tracking-[0%] align-middle lg:text-left">
                  Learn from expert-led courses designed for aspiring
                  influencers
                </p>
              </li>
            </ul>

            <div className="space-y-6">
              {/* Terms and Copyright - Mobile first */}
              <div className="block lg:hidden space-y-4">
                <p className="font-medium text-xs leading-[100%] tracking-[0%] align-middle text-gray-500 text-center lg:text-left">
                  By clicking &quot;Get Started&quot;, you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>

                <p className="font-medium text-xs leading-[100%] tracking-[0%] align-middle text-gray-500 text-center lg:text-left">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>

              <div className="w-full md:w-1/2">
                <button className="block w-full uppercase h-[40px] px-10 py-2 gap-2.5 rounded-[10px] bg-[#FC004E] shadow-[2px_2px_10px_0px_#00E7F9] text-white font-bold transition-colors duration-200">
                  Get Started <FaChevronRight className="inline-block mb-1 ms-1" />
                </button>

                <p className="font-normal text-xs leading-4 tracking-[0%] text-center mt-2">
                  1-minute quiz for personalized Insights
                </p>
              </div>

              {/* Terms and Copyright - Desktop */}
              <div className="hidden lg:block space-y-4">
                <p className="font-medium text-xs leading-[100%] tracking-[0%] align-middle text-gray-500 text-center lg:text-left">
                  By clicking &quot;Get Started&quot;, you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>

                <p className="font-medium text-xs leading-[100%] tracking-[0%] align-middle text-gray-500 text-center lg:text-left">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>
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
      </Container>
    </div>
  );
};

export default HeroSection;
