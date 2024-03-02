import React from "react";
import styles from "./index.module.css";

const Newsletter = () => (
    <div className={styles.container}>
        <form
            className={styles.form}
            action="https://app.audienceful.com/api/subscribe/NpAB3KJPUTej5ayujTBM9F/"
            method="post"
        >
            <div>
                <h1>Synmetrix</h1>
                <p>Subscribe to our newsletter to stay updated on our latest developments</p>
            </div>
            <div className={styles.fRow}>
                <label htmlFor="email">Email Address</label>
                <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter your email..."
                    required />
            </div>
            <button type="submit">Submit</button>
            <div className={styles.aBadge}>
                <a href="https://github.com/mlcraft-io/mlcraft" target="_blank" rel="noopener noreferrer">
                    Check out our open source project
                </a>
            </div>
        </form>
    </div>
);

export default Newsletter;
