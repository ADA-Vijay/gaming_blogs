import React from 'react'
import styles from "@/app/privacy-policy/page.module.css";
const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rules}>
                
                <h1 className={styles["header-texts"]}>Contact Us</h1>
                <span className={styles.story}>
                    Have something to say? We'd love to hear from you! Choose the right email category below:
                </span>
            </div>

            < div>
                <h2 className={styles["header-texts"]}>Content Writing Opportunities</h2>
                <span className={styles.email}>
                    Email: gametechanime@gmail.com
                </span>

                <p className={styles.story}>Subject Line Format: [CAREER] - Your Name</p>

                <ul style={{ marginTop: "10px" }}>
                    <li className={styles.lists}>
                        	Looking for passionate writers who love gaming, tech, and anime
                    </li>
                    <li className={styles.lists}>
                      	Please include writing samples and your areas of expertise
                    </li>
                    <li className={styles.lists}>
                       	Mention your favorite games/anime series
                    </li>

                </ul>
            </div>
            < div>
                <h2 className={styles["header-texts"]}>Partnership & Business Inquiries</h2>
                <span className={styles.email}>
                Email: gametechanime@gmail.com
                </span>

                <p className={styles.story}>Subject Line Format: [PARTNERSHIP] - Company Name</p>

                <ul style={{ marginTop: "10px" }}>
                    <li className={styles.lists}>
                    	Collaboration opportunities
                    </li>
                    <li className={styles.lists}>
                	Advertising Inquiries
                    </li>
                    <li className={styles.lists}>
                    	Press releases and media kits
                    </li>

                </ul>
            </div>
            < div>
                <h2 className={styles["header-texts"]}>General Queries</h2>
                <span className={styles.rulesList}>
                Email: gametechanime@gmail.com
                </span>

                <p className={styles.story}>Subject Line Format: [GENERAL] - Your Query</p>

                <ul style={{ marginTop: "10px" }}>
                    <li className={styles.lists}>
                  	Content suggestions
                    </li>
                    <li className={styles.lists}>
                		Technical support
                    </li>
                    <li className={styles.lists}>
                    	Feedback and corrections
                    </li>

                    <li className={styles.lists}>
                   	General questions
                    </li>
                </ul>
            </div>
            <div className={styles.rules}>
                <h2  className={styles["header-texts"]}>Response Time</h2>
                <span className={styles.rulesList}>
                We aim to respond to all emails within 48 hours during regular business days. For faster 
                responses, please use the appropriate subject line format and be clear in your message.
                </span>
            </div>
        </div>
    )
}

export default page