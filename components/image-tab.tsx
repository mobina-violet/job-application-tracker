"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export default function ImagesTabs() {
  const [activeTab, setActiveTab] = useState("organize");
  return (
    <>
      {/* Hero Image Section tab */}
      <section className="border-t py-16 bg-white ">
        <div className="mx-auto container px-4 ">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-2 justify-center mb-8">
              <Button
                onClick={() => setActiveTab("organize")}
                className={`px-6 py-3 font-medium text-sm transition-colors rounded-lg ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                Organize Applications
              </Button>
              <Button
                onClick={() => setActiveTab("hired")}
                className={`px-6 py-3 font-medium text-sm transition-colors rounded-lg ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                Get hired
              </Button>
              <Button
                onClick={() => setActiveTab("boards")}
                className={`px-6 py-3 font-medium text-sm transition-colors rounded-lg ${activeTab === "boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                Manage boards
              </Button>
            </div>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
              {activeTab === "organize" && (
                <Image
                  src="/hero-images/hero1.png"
                  alt="organaiz application"
                  width={1200}
                  height={800}
                />
              )}
              {activeTab === "hired" && (
                <Image
                  src="/hero-images/hero2.png"
                  alt="organaiz application"
                  width={1200}
                  height={800}
                />
              )}
              {activeTab === "boards" && (
                <Image
                  src="/hero-images/hero3.png"
                  alt="organaiz application"
                  width={1200}
                  height={800}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
