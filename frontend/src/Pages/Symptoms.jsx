import React from "react";
import Zoom from "react-reveal/Zoom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Symptoms() {
  return (
    <React.Fragment>
      <NavBar />
      <Zoom>
        <div style={{ margin: "3% 5% 5% 5%", color: "#757575" }}>
          <h2 style={{ color: "#375863" }}>Symptoms and Diagnosis</h2>
          <hr />
          <p>
            Breast cancer symptoms vary widely — from lumps to swelling to skin
            changes — and many breast cancers have no obvious symptoms at all.
          </p>
          <p>
            In some cases, a lump may be too small for you to feel or to cause
            any unusual changes you can notice on your own. Often, an abnormal
            area turns up on a screening mammogram (X-ray of the breast), which
            leads to further testing.
          </p>
          <p>
            In other cases, however, the first sign of breast cancer is a new
            lump or mass in the breast that you or your doctor can feel. A lump
            that is painless, hard, and has uneven edges is more likely to be
            cancer. But sometimes cancers can be tender, soft, and rounded.{" "}
          </p>
        </div>
      </Zoom>
      <Zoom>
        <div style={{ margin: "5%", color: "#757575" }}>
          <h5 style={{ color: "#b5857b" }}>
            It's important to have anything unusual checked by your doctor.
          </h5>
          <p>
            According to the American Cancer Society, any of the following
            unusual changes in the breast can be a symptom of breast cancer:
          </p>
          <div>
            <ul>
              <li>swelling of all or part of the breast</li>
              <li>skin irritation or dimpling</li>
              <li>breast pain</li>
              <li>nipple pain or the nipple turning inward</li>
              <li>
                redness, scaliness, or thickening of the nipple or breast skin
              </li>
              <li>a nipple discharge other than breast milk</li>
              <li>a lump in the underarm area</li>
            </ul>
          </div>
        </div>

        <div style={{ margin: "5% ", color: "#757575" }}>
          <p>
            These changes also can be signs of less serious conditions that are
            not cancerous, such as an infection or a cyst. Again, it’s important
            to get any breast changes checked out promptly by a doctor.
          </p>
          <p>
            Breast self-exam should be part of your monthly health care routine,
            and you should visit your doctor if you experience breast changes.
            If you're over 40 or at a high risk of breast cancer, you should
            also have an annual mammogram and physical exam by a doctor. The
            earlier breast cancer is found and diagnosed, the better your
            chances of beating it.
          </p>
          <p>
            The actual process of diagnosis can take weeks and involve many
            different kinds of tests. Waiting for results can feel like a
            lifetime. The uncertainty stinks. But once you understand your own
            unique “big picture,” you can make better decisions. You and your
            doctors can formulate a treatment plan tailored just for you.
          </p>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.breastcancer.org/symptoms"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "#e09d9d", fontSize: "20px" }}
            >
              Know more on breastcancer.org
            </a>
          </div>
        </div>
      </Zoom>

      <Footer />
    </React.Fragment>
  );
}

export default Symptoms;
