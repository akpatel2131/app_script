import nextOrSource from "../tools/nextOrSource";
import usaFlag from "../images/United States of America (US).svg";
import instagram from "../images/Instagram.svg";
import twitter from "../images/twitter.svg";
import gPay from "../images/g-pay.svg";
import amex from "../images/amex.svg";
import applePay from "../images/apple-pay.svg";
import masterCard from "../images/master-card.svg";
import paypal from "../images/paypal.svg";
import pay from "../images/pay.svg";
import Divider from "../wrappers/Divider";
import styles from "./footer.module.css";
import useBreakpoints from "@/tools/useBreakPoints";
import Collapse from "@/wrappers/Collapse";

const PAY_OPTIONS = [gPay, amex, applePay, masterCard, paypal, pay];
const METTA_MUSE = [
  "About Us",
  "Stories",
  "Artisans",
  "Boutiques",
  "Contact Us",
  "EU Compliances Docs",
];
const QUICK_LINKS = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
];

function MetaLink({ options }) {
  return (
    <div className={styles.links}>
      {options.map((item, index) => (
        <button key={index}>{item}</button>
      ))}
    </div>
  );
}

function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      <img src={nextOrSource(instagram)} alt="instagram" />
      <img src={nextOrSource(twitter)} alt="twitter" />
    </div>
  );
}

export default function Footer() {
  const { isMobile } = useBreakpoints();

  const collapseContent = [
    {
      header: <div className={styles.linkHeaders}>mettā muse</div>,
      children: <MetaLink options={METTA_MUSE} />,
      key: 1,
    },
    {
      header: <div className={styles.linkHeaders}>QUICK LINK</div>,
      children: <MetaLink options={QUICK_LINKS} />,
      key: 2,
    },
    {
      header: <div className={styles.linkHeaders}>Follow Us</div>,
      children: <SocialMedia />,
      key: 3,
    },
  ];

  return (
    <div className={styles.footerContainer}>
      <div className={styles.signupContainer}>
        <div className={styles.signSection}>
          <div className={styles.signHeader}>Be the first to know</div>
          <div className={styles.signSubtitle}>
            Sign up for updates from mettā muse.
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.emailInput}
              placeholder="Enter your email"
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
        {isMobile && <Divider />}
        <div className={styles.contactContainer}>
          <div className={styles.contactUsTitle}>Contact Us</div>
          <div className={styles.contact}>
            <div>+44 221 133 5360</div>
            <div>customercare@mettamuse.com</div>
          </div>
          {isMobile && <Divider className={styles.divider} />}
          <div className={styles.contactUsTitle}>Currency</div>
          <div className={styles.contact}>
            <div className={styles.usaContainer}>
              <img
                src={nextOrSource(usaFlag)}
                alt="United States of America (US)"
                className={styles.usImage}
              />
              + USD
            </div>
            {!isMobile && (
              <div>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </div>
            )}
          </div>
        </div>
      </div>
      <Divider className={styles.footerDivider} />
      <div className={styles.linkSection}>
        {!isMobile && (
          <>
            <div className={styles.quickLinkContainer}>
              <div className={styles.linkHeaders}>mettā muse</div>
              <MetaLink options={METTA_MUSE} />
            </div>
            <div className={styles.quickLinkContainer}>
              <div className={styles.linkHeaders}>QUICK LINK</div>
              <MetaLink options={QUICK_LINKS} />
            </div>
          </>
        )}

        {isMobile && (
          <Collapse
            items={collapseContent}
            innerClassNames={{
              wrapper: styles.collapseWrapper,
            }}
          />
        )}
        <div className={styles.quickLinkContainer}>
          {!isMobile && (
            <div className={styles.socialMediaContainer}>
              <div className={styles.linkHeaders}>Follow Us</div>
              <SocialMedia />
            </div>
          )}
          <div className={styles.socialMediaContainer}>
            <div className={styles.linkHeaders}>mettā muse Accepts</div>
            <div className={styles.socialMedia}>
              {PAY_OPTIONS.map((item, index) => (
                <img
                  src={nextOrSource(item)}
                  key={index}
                  className={styles.payImages}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightText}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
}
