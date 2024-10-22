import { Carousel } from "@arco-design/web-react";
import { memo, useEffect } from "react";
//@ts-ignore
import Logo from "@/assets/svg/logo.svg";

import { useTranslation } from "react-i18next";
export default memo(function Banner() {
  const { t } = useTranslation();
  const data = [
    {
      slogan: t("page.login.banner.slogan1"),
      subSlogan: t("page.login.banner.subSlogan1"),
      image: "http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png",
    },
    {
      slogan: t("page.login.banner.slogan2"),
      subSlogan: t("page.login.banner.subSlogan2"),
      image: "http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png",
    },
    {
      slogan: t("page.login.banner.slogan3"),
      subSlogan: t("page.login.banner.subSlogan3"),
      image: "http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png",
    },
  ];

  return (
    <div className="banner">
      <h2 className="logo">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.37754 16.9795L12.7498 9.43027C14.7163 7.41663 17.9428 7.37837 19.9564 9.34482C19.9852 9.37297 20.0137 9.40145 20.0418 9.43027L20.1221 9.51243C22.1049 11.5429 22.1049 14.7847 20.1221 16.8152L12.7498 24.3644C10.7834 26.378 7.55686 26.4163 5.54322 24.4498C5.5144 24.4217 5.48592 24.3932 5.45777 24.3644L5.37754 24.2822C3.39468 22.2518 3.39468 19.0099 5.37754 16.9795Z"
              fill="#12D2AC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.0479 9.43034L27.3399 16.8974C29.3674 18.9735 29.3674 22.2883 27.3399 24.3644C25.3735 26.3781 22.147 26.4163 20.1333 24.4499C20.1045 24.4217 20.076 24.3933 20.0479 24.3644L12.7558 16.8974C10.7284 14.8213 10.7284 11.5065 12.7558 9.43034C14.7223 7.4167 17.9488 7.37844 19.9624 9.34489C19.9912 9.37304 20.0197 9.40152 20.0479 9.43034Z"
              fill="#307AF2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.1321 9.52163L23.6851 13.1599L16.3931 20.627L9.10103 13.1599L12.6541 9.52163C14.6707 7.45664 17.9794 7.4174 20.0444 9.434C20.074 9.46286 20.1032 9.49207 20.1321 9.52163Z"
              fill="#0057FE"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="26" height="19" fill="white" transform="translate(3.5 7)" />
            </clipPath>
          </defs>
        </svg>
        <span>ShengHui Pro</span>
      </h2>

      <Carousel autoPlay={true} indicatorType="dot" showArrow="hover">
        {data.map((item, index) => (
          <div key={item.slogan} className="carousel-item">
            <div className="text">
              <p className="carousel-title">{item.slogan}</p>
              <p className="carousel-sub-title">{item.subSlogan}</p>
            </div>
            <img src={item.image} alt="pic" className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
});
