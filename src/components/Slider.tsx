"use client";
import React from "react";
import styles from "@/styles/Slider.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <div
      className={`${styles.sliderWrapper} relative w-full h-auto overflow-hidden`}
    >
      <img
        src={images[0]}
        alt="Slider Image"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-6 text-white">
        <h2 className={styles.sliderTitle}>
          Sản phẩm nhựa chất lượng cao cho mọi nhu cầu
        </h2>

        <p className={`${styles.sliderText} flex items-center space-x-2`}>
          <FaLongArrowAltRight />
          <span>Bạn đang tìm kiếm sản phẩm nhựa bền bỉ và an toàn?</span>
        </p>
        <p className={`${styles.sliderText} flex items-center space-x-2`}>
          <FaLongArrowAltRight />
          <span>Chúng tôi cung cấp các giải pháp nhựa cho mọi ngành nghề.</span>
        </p>

        <p className={`${styles.sliderText} flex items-center space-x-2`}>
          <FaLongArrowAltRight />
          <span>
            Chất liệu nhựa thân thiện với môi trường và đảm bảo chất lượng.
          </span>
        </p>

        <p className={`${styles.sliderText} mt-4`}>
          <span>
            Chúng tôi cam kết cung cấp sản phẩm nhựa chất lượng cao, đáp ứng mọi
            nhu cầu và tiêu chuẩn an toàn.
          </span>
        </p>
        <div className="mt-6">
          <a
            href="/course"
            className="px-6 py-2 bg-[#319795] text-white font-semibold rounded-full hover:bg-[#2C7A7B] inline-block text-center
      hidden lg:block w-[200px]"
          >
            Khám phá ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
