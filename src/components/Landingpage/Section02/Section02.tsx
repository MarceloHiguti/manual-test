import Image from "next/image";
import style from "./Section02.module.scss";
import { CoreTypography } from "@/components/CoreTypography/CoreTypography";
import { FC } from "react";

interface ISection02 {
  title: string;
  content: {
    title: string;
    subTitle: string;
    text: string;
  };
}

const Section02: FC<ISection02> = ({ title, content }) => {
  return (
    <div className={style.section02__container}>
      <div className={style.section02__text__title__container}>
        <CoreTypography customClassName={style.section02__text__title}>
          {title}
        </CoreTypography>
      </div>
      <div className={style.section02__content__container}>
        <div className={style.section02__content__image}>
          <Image
            src="/images/section02-image.png"
            width={370}
            height={445}
            style={{ width: "100%", height: "auto" }}
            alt="Hair loss image"
          />
        </div>
        <div className={style.section02__content__text__container}>
          <div className={style.section02__content__text__group}>
            <CoreTypography
              customClassName={style.section02__content__text__01}
            >
              {content.title}
            </CoreTypography>
            <CoreTypography
              customClassName={style.section02__content__text__02}
            >
              {content.subTitle}
            </CoreTypography>
            <CoreTypography
              customClassName={style.section02__content__text__03}
            >
              {content.text}
            </CoreTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section02;
