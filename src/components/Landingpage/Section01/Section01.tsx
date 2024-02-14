import Image from "next/image";
import style from "./Section01.module.scss";
import Link from "next/link";
import { CoreTypography } from "@/components/CoreTypography/CoreTypography";
import { Button } from "@mui/material";
import ManualLogo from "../../../../public/logos/manual-logo.svg";
import { FC } from "react";

interface ISection01 {
  title: string;
  subTitle: string;
}

const Section01: FC<ISection01> = async ({ title, subTitle }) => {
  return (
    <div className={style.section01__container}>
      <Image
        src="/images/section01-background.jpeg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", minHeight: "750px" }} // optional
        alt="Section 01 background image"
      />
      <div className={style.section01__logo__container}>
        <Image src={ManualLogo} alt="Manual icon" width={40} height={38} />
      </div>
      <div className={style.section01__text__container}>
        <CoreTypography customClassName={style.section01__text__title}>
          {title}
        </CoreTypography>
        <CoreTypography customClassName={style.section01__text__subtitle}>
          {subTitle}
        </CoreTypography>

        <Link href="/quiz">
          <Button
            style={{
              backgroundColor: "#7e0807",
              marginTop: "40px",
              padding: "15px 30px 15px 30px",
            }}
            variant="contained"
          >
            take the quiz
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Section01;
