import Image from "next/image";
import style from "./Footer.module.scss";
import { CoreTypography } from "@/components/CoreTypography/CoreTypography";
import { FC } from "react";
import { Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "../../../../public/svgs/facebook-icon.svg";
import ManualLogo from "../../../../public/logos/manual-logo.svg";

const Footer: FC = () => {
  return (
    <div className={style.section__footer}>
      <div className={style.footer__info__container}>
        <div>
          <Image src={ManualLogo} alt="Manual icon" width={75} height={75} />
        </div>
        <div className={style.footer__info__frames__container}>
          <div className={style.footer__info__frame}>
            <CoreTypography customClassName={style.footer_info_title}>
              PRODUCT
            </CoreTypography>

            <CoreTypography customClassName={style.footer_info_title}>
              Popular
            </CoreTypography>
            <CoreTypography customClassName={style.footer_info_title}>
              Trending
            </CoreTypography>
            <CoreTypography customClassName={style.footer_info_title}>
              Guided
            </CoreTypography>
            <CoreTypography customClassName={style.footer_info_title}>
              Products
            </CoreTypography>
          </div>
          <div className={style.footer__info__frame}>
            <CoreTypography customClassName={style.footer_info_title}>
              COMPANY
            </CoreTypography>

            <CoreTypography customClassName={style.footer_info_title}>
              Press
            </CoreTypography>
            <CoreTypography customClassName={style.footer_info_title}>
              Mission
            </CoreTypography>
            <CoreTypography customClassName={style.footer_info_title}>
              Strategy
            </CoreTypography>
            <CoreTypography customClassName={style.footer_info_title}>
              About
            </CoreTypography>
          </div>
          <div className={style.footer__info__frame}>
            <CoreTypography customClassName={style.footer_info_title}>
              INFO
            </CoreTypography>

            <CoreTypography customClassName={style.footer_info_title}>
              Support
            </CoreTypography>
            <CoreTypography customClassName={style.footer_info_title}>
              Customer Service
            </CoreTypography>
            <CoreTypography customClassName={style.footer_info_title}>
              Get Started
            </CoreTypography>
          </div>
          <div className={style.footer__info__frame}>
            <CoreTypography customClassName={style.footer_info_title}>
              FOLLOW US
            </CoreTypography>
            <div className={style.footer__socialMedia__icons}>
              <Image
                src={FacebookIcon}
                alt="Facebook icon"
                width={24}
                height={24}
                style={{ fill: "#7e0807" }}
              />
              <GoogleIcon
                style={{ width: "24px", height: "24px", fill: "#7e0807" }}
              />
              <TwitterIcon
                style={{ width: "24px", height: "24px", fill: "#7e0807" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer__rights__container}>
        <Divider />
        <CoreTypography customClassName={style.footer__rights__text}>
          © 2021 Manual. All rights reserverd
        </CoreTypography>
      </div>
    </div>
  );
};

export default Footer;
