import Form from "react-bootstrap/Form";
import styles from "@/components/footer/footer.module.css";
import pageStyle from "../../app/page.module.css";
import Link from "next/link";
function Footer() {
  return (
  
    <>
      <div className={styles.footerWrap}>
        <div className={`${styles["container"]} container`}>
          <div className={styles.footerItem1}>
            <ul className={styles["item-ul-wrap"]}>
              <li>
                <div className={styles.footerLogoImg}>
                  <img src="https://fama.b-cdn.net/GameTech/FClogo.jpg" alt="logo" />
                </div>
              </li>
              <li>
                <div
                  className={styles["footer-ul1"]}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ul>
                    <li>
                      <Link href="/about-us" className={styles.link} aria-label="about us">
                        About Us{" "}
                      </Link>
                    </li>

                    <li className={styles["li-line"]}>
                      {" "}
                      <Link
                        href="/contact-us"
                        className={styles.link}
                        aria-label="contact us"
                      >
                        Contact Us
                      </Link>
                    </li>

                    <li>
                      <Link href="/privacy-policy" className={styles.link} aria-label="privacy">
                        Privacy
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles["item-ul-li-last"]}>
                <ul className={styles["footer-ul2"]}>
                  <li className={styles["bold-li"]}>Follow Us</li>
                  <li className={styles.liIcon}>
                    <Link
                      href="https://www.youtube.com/@GameTechAnime "
                      className={styles.link}
                      aria-label="Youtube Link"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </li>

                  <li className={styles.liIcon}>
                    <Link
                      href="https://x.com/GameTechAnime"
                      className={styles.link}
                      aria-label="Twiiter Link"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                  </li>
                  <li className={styles.liIcon}>
                    <Link
                      href="https://www.linkedin.com/company/gametechanime/"
                      className={styles.link}
                      aria-label="Linkdin"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
