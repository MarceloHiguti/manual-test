import Image from "next/image";
import style from "./Section03.module.scss";
import { CoreTypography } from "@/components/CoreTypography/CoreTypography";
import { FC } from "react";

interface ISection03 {
  content: {
    title: string;
    subTitle: string;
    text: string;
  };
}

const Section03: FC<ISection03> = ({ content }) => {
  return (
    <div className={style.section03__container}>
      <div className={style.section03__content__container}>
        <div className={style.section03__content__text__group}>
          <CoreTypography customClassName={style.section03__content__text__01}>
            {content.title}
          </CoreTypography>
          <CoreTypography customClassName={style.section03__content__text__02}>
            {content.subTitle}
          </CoreTypography>
          <CoreTypography customClassName={style.section03__content__text__03}>
            {content.text}
          </CoreTypography>
        </div>
        <Image
          src="/images/section03-image.png"
          width={370}
          height={445}
          alt="Hair loss image"
        />
      </div>
    </div>
  );
};

export default Section03;
