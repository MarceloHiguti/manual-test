import Image from "next/image";
import style from './LandingPage.module.css'
import Link from "next/link";
import { CoreText } from "@/components/CoreText/CoreText";
import { Button, Divider } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '../../public/svgs/facebook-icon.svg';
import ManualLogo from '../../public/logos/manual-logo.svg';

export default function LandingPage() {
  return (
    <div>
      <div className={style.section01__container}>
        <Image
          src="/images/section01-background.jpeg"
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', minHeight: '750px' }} // optional
          alt="Section 01 background image" 
        />
        <div className={style.section01__text__container}>
          <CoreText customClassName={style.section01__text__title}>Be good to yourself</CoreText>
          <CoreText customClassName={style.section01__text__subtitle}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</CoreText>
          
          <Link href="/quiz">
            <Button style={{backgroundColor: '#7e0807', marginTop: '40px', padding: '15px 30px 15px 30px'}} variant='contained'>take the quiz</Button>
          </Link>
        </div>
      </div>
      <div className={style.section02__container}>
        <div className={style.section02__text__title__container}>
          <CoreText customClassName={style.section02__text__title}>What we can help with</CoreText>
        </div>
        <div className={style.section02__content__container}>
          <div className={style.section02__content__image}>
            <Image
              src="/images/section02-image.png"
              width={370}
              height={445}
              style={{ width: '370px', height: '445px' }} // optional
              alt="Hair loss image"
            />
          </div>
          <div className={style.section02__content__text__container}>
            <div className={style.section02__content__text__group}>
              <CoreText customClassName={style.section02__content__text__01}>HAIR LOSS</CoreText>
              <CoreText customClassName={style.section02__content__text__02}>Hair loss needn’t be irreversible. We can help! </CoreText>
              <CoreText customClassName={style.section02__content__text__03}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</CoreText>
            </div>
          </div>
        </div>
      </div>
      <div className={style.section03__container}>
        <div className={style.section03__content__container}>
          <div className={style.section02__content__text__group}>
            <CoreText customClassName={style.section02__content__text__01}>ERECETILE DYSFUNCTION</CoreText>
            <CoreText customClassName={style.section02__content__text__02}>Erections can be a tricky thing. But no need to feel down!</CoreText>
            <CoreText customClassName={style.section02__content__text__03}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</CoreText>
          </div>
          <Image
            src="/images/section03-image.png"
            width={370}
            height={445}
            alt="Hair loss image" 
          />
        </div>
      </div>
      <div className={style.section__footer}>
        <div className={style.footer__info__container}>
          <div>
            <Image
              src={ManualLogo}
              alt="Manual icon"
              width={75}
              height={75}
            />
          </div>
          <div className={style.footer__info__frames__container}>
            <div className={style.footer__info__frame}>
              <CoreText customClassName={style.footer_info_title}>PRODUCT</CoreText>

              <CoreText customClassName={style.footer_info_title}>Popular</CoreText>
              <CoreText customClassName={style.footer_info_title}>Trending</CoreText>
              <CoreText customClassName={style.footer_info_title}>Guided</CoreText>
              <CoreText customClassName={style.footer_info_title}>Products</CoreText>
            </div>
            <div className={style.footer__info__frame}>
              <CoreText customClassName={style.footer_info_title}>COMPANY</CoreText>

              <CoreText customClassName={style.footer_info_title}>Press</CoreText>
              <CoreText customClassName={style.footer_info_title}>Mission</CoreText>
              <CoreText customClassName={style.footer_info_title}>Strategy</CoreText>
              <CoreText customClassName={style.footer_info_title}>About</CoreText>
            </div>
            <div className={style.footer__info__frame}>
              <CoreText customClassName={style.footer_info_title}>INFO</CoreText>

              <CoreText customClassName={style.footer_info_title}>Support</CoreText>
              <CoreText customClassName={style.footer_info_title}>Customer Service</CoreText>
              <CoreText customClassName={style.footer_info_title}>Get Started</CoreText>
            </div>
            <div className={style.footer__info__frame}>
              <CoreText customClassName={style.footer_info_title}>FOLLOW US</CoreText>
              <div className={style.footer__socialMedia__icons}>
                <Image
                  src={FacebookIcon}
                  alt="Facebook icon"
                  width={24}
                  height={24}
                  style={{fill: '#7e0807'}}
                />
                <GoogleIcon style={{width: '24px', height: '24px', fill: '#7e0807'}} />
                <TwitterIcon style={{width: '24px', height: '24px', fill: '#7e0807'}} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer__rights__container}>
          <Divider />
          <CoreText customClassName={style.footer__rights__text}>© 2021 Manual. All rights reserverd</CoreText>
        </div>
      </div>
    </div>
  );
}
