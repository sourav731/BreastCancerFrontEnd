import React from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Zoom from "react-reveal/Zoom";

var listHeadColor = "#ced95d";

function Treatment() {
  return (
    <React.Fragment>
      <NavBar />

      <div style={{ margin: "3% 5% 5% 5%", color: "#757575" }}>
        <h2 style={{ color: "#375863" }}>Treatment and side effects</h2>
        <hr />
        <Zoom>
          <p>
            In recent years, there's been an explosion of life-saving treatment
            advances against breast cancer, bringing new hope and excitement.
            Instead of only one or two options, today there's an overwhelming
            menu of treatment choices that fight the complex mix of cells in
            each individual cancer. The decisions — surgery, then perhaps
            radiation, hormonal (anti-estrogen) therapy, and/or chemotherapy —
            can feel overwhelming.
          </p>
        </Zoom>
        <Zoom>
          <p>
            Breastcancer.org can help you understand your cancer stage and
            appropriate options, so you and your doctors can arrive at the best
            treatment plan for YOU.
          </p>
          <p>
            In the following pages of the Treatment and Side Effects section,
            you can learn about:
          </p>
        </Zoom>

        <div style={{ padding: "0% 4% 0% 4%" }}>
          <dl>
            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Planning Your Treatment{" "}
              </dt>
              <dd>
                What types of treatment are available, the most likely sequence
                of treatments, treatment options by cancer stage, and fitting
                treatment into your schedule.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Getting a second opinion
              </dt>
              <dd>
                Reasons for getting a second opinion about your treatment plan,
                how to go about getting one, and what to do once you’ve got it.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Surgery
              </dt>
              <dd>
                Breast-conserving surgery (lumpectomy), mastectomy, and lymph
                node dissection, and what to expect from each. Also included:
                Prophylactic surgery and breast reconstruction.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Chemotherapy
              </dt>
              <dd>
                How chemotherapy works, who should get it, different types and
                combinations, and side effects and how to manage them.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Radiation Therapy
              </dt>
              <dd>
                How radiation therapy works, who it's for, advantages, side
                effects, and what to expect when you get it.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Hormonal Therapy
              </dt>
              <dd>
                The link between hormones and breast cancer and how different
                groups of drugs — including ERDs, SERMs, and aromatase
                inhibitors — can affect that link. Also covered: Side effects of
                hormonal therapies.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Targeted Therapy
              </dt>
              <dd>
                How different drugs work, who should get them, how they're
                given, side effects, and major studies.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Immunotherapy
              </dt>
              <dd>
                What is immunotherapy, different types of immunotherapy, and who
                it's for.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Complementary and Holistic Medicine
              </dt>
              <dd>
                How complementary medicine techniques such as acupuncture,
                meditation, and yoga could be a helpful addition to your regular
                medical treatment. Includes research on complementary techniques
                and ways to find qualified practitioners.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Drugs for Treatment and Risk Reduction
              </dt>
              <dd>
                A reference list of drugs used to treat and reduce the risk of
                breast cancer, including how they work, to whom they are
                typically given, and side effects.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Treatments for Pain
              </dt>
              <dd>
                Ways to treat cancer- and treatment-related pain, including
                types of medications and tips on talking to your doctors about
                pain.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Treatment Side Effects
              </dt>
              <dd>A reference list of side effects and ways to manage them.</dd>
            </Zoom>
            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Lymphedema
              </dt>
              <dd>
                All about lymphedema, including who is at risk, what to watch
                out for, how to reduce risk of lymphedema flare-ups, and how to
                find a lymphedema therapist.
              </dd>
            </Zoom>

            <Zoom>
              <dt style={{ color: listHeadColor, textDecoration: "underline" }}>
                Clinical Trials
              </dt>
              <dd>
                What clinical trials are and how they work, why they're
                important, and how to find trials that may be appropriate for
                you.
              </dd>
            </Zoom>
          </dl>
        </div>
      </div>
      <Zoom>
        <div style={{ margin: "5% ", color: "#757575", textAlign: "center" }}>
          <a
            href="https://www.breastcancer.org/treatment"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#e09d9d", fontSize: "20px" }}
          >
            Know more on breastcancer.org
          </a>
        </div>
      </Zoom>
      <Footer />
    </React.Fragment>
  );
}

export default Treatment;
