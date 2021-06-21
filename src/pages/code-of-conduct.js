/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

function CodeOfConductPage() {
  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="Code Of Conduct" />
      <section className="mainSection">
        <div className="mainSectionContent mainSectionOne">
          <div className="pt-8 px-2">
            <h2 className=" text-FCCblue-200">
              <span>freeCodeCamp Nashville Code of Conduct</span>
            </h2>

            <p className="mb-5">
              freeCodeCamp Nashville is a community intended to provide a safe
              space for professional networking, education, and collaboration in
              the local Nashville developer community.
            </p>
            <p className="mb-5">
              We value the participation of each member of the freeCodeCamp
              Nashville community and want all of our community members to have
              enjoyable and fulfilling experiences. Accordingly, all attendees
              are expected to show respect an courtesy to other community
              members both online and in person.
            </p>
            <p className="mb-5">
              To make clear what is expected, all freeCodeCamp Nashville
              organizers, speakers, sponsors, and community members are required
              to conform to the following Code of Conduct. Organizers will
              enforce this code during all freeCodeCamp Nashville meetings as
              well as in any official online discussion channels.
            </p>

            {/* ------------------- Our Standards ------------------- */}

            <h3>Our Standards</h3>
            <p className="mb-5">
              freeCodeCamp Nashville is dedicated to providing a positive,
              harassment-free environment for everyone, regardless of gender,
              gender identity or expression, sexual orientation, disability,
              physical appearance, body size, ethnicity, nationality, race, age,
              religion (or lack thereof), education, or socio-economic status.
              We do not tolerate harassment of participants in any form.
            </p>

            <p className="mb-5">
              Examples of harassment include, but are not limited to:
            </p>

            <ol className="list-disc pl-6 mb-4">
              <li>Verbal harassment in any form of community members</li>
              <li>
                Written harassment including on any electronic media or
                communication channel
              </li>
              <li>Deliberate intimidation, stalking, or following</li>
              <li>
                Violent threats or language directed against another person
              </li>
              <li>
                Sexual language and imagery in any event venue or communication
                channel
              </li>
              <li>Harassing photography or recording</li>
              <li>Sustained disruption of talks or other events</li>
              <li>Inappropriate or unwelcome physical contact</li>
              <li>Unwelcome sexual attention or advances</li>
              <li>
                Advocating for, or encouraging, any of the above behaviour
              </li>
            </ol>

            <p className="mb-5">
              Members asked to stop any inappropriate behavior are expected to
              comply immediately.
            </p>

            <p className="mb-5">
              If a community member violates these rules, the organizers may
              take any action they deem appropriate, including issuing a warning
              or banning the member from the community permanently.
            </p>

            <p className="mb-5">
              We appreciate your help in making freeCodeCamp Nashville a
              welcoming, friendly, professional space for everyone.
            </p>

            {/* ------------------- Scope ------------------- */}

            <h3>Scope</h3>

            <p className="mb-5">
              All freeCodeCamp Nashville community members are subject to this
              Code of Conduct. This includes freeCodeCamp Nashville organizers
              and speakers. In addition, all sponsors and vendors are subject to
              this Code of Conduct as well.
            </p>

            <p className="mb-5">
              Where freeCodeCamp Nashville platforms or events are subject to
              their own Code of Conduct (e.g. the{' '}
              <a href="https://support.discordapp.com/hc/en-us/articles/360024871991-Discord-Partnership-Code-of-Conduct">
                Discord Parnership Code of Conduct
              </a>
              ) both Code of Conducts will be enforced. If there are any
              conflicts between the two, priority will be given to the third
              party Code of Conduct freeCodeCamp Nashville is subject to in
              these instances.
            </p>

            {/* ------------------- Reporting Guidelines ------------------- */}

            <h3>Reporting Guidelines</h3>

            <p className="mb-5">
              If you believe that someone is violating the code of conduct in an
              official freeCodeCamp Nashville space, or witness someone
              violating this code of conduct, please contact an organizer
              immediately. You may report the violation in a number of ways:
            </p>

            <ol className="list-disc pl-6 mb-4">
              <li>By finding an organizer and reporting in person</li>
              <li>
                Contacting in organizer directly, or corporately, via email:
                <ol className="list-disc pl-6 mb-4 mt-2">
                  <li>
                    Seth Alexander:{' '}
                    <a href="mailto:setha@hey.com">setha@hey.com</a>
                  </li>
                  <li>
                    Laura Pinell:{' '}
                    <a href="mailto:laura@uxbridge.io">laura@uxbridge.io</a>
                  </li>
                </ol>
              </li>
              <li>
                All reports will be kept confidential.** In some cases we may
                determine that a public statement will need to be made. In those
                cases, the identities of all victims, reporters, and the accused
                will remain confidential unless those individuals instruct us
                otherwise.
              </li>
            </ol>

            <p className="mb-5">
              Organizers will be happy to help members contact local law
              enforcement, provide escorts, or otherwise assist any attendee to
              feel safe for the duration of any event. We value your presence.
            </p>

            <p className="mb-5">When making a report, please include:</p>

            <ol className="list-disc pl-6 mb-4">
              <li>Your contact info for follow-up contact.</li>
              <li>
                Names (legal, nicknames, or pseudonyms) of any individuals
                involved.
              </li>
              <li>
                If there were other witnesses besides you, please try to include
                them as well.
              </li>
              <li>
                When and where the incident occurred. Please be as specific as
                possible.
              </li>
              <li>Your account of what occurred.</li>
              <li>
                If there is a publicly available record (e.g. an email archive
                or a public Slack log) please include a link.
              </li>
              <li>Any extra context you believe existed for the incident.</li>
              <li>If you believe this incident is ongoing.</li>
              <li>Any other information you believe we should have.</li>
            </ol>

            {/* ------------------- Appeals ------------------- */}

            <h3>Appeals</h3>

            <p className="mb-5">
              Only permanent actions (such as bans) may be appealed. To appeal a
              decision, please contact an organizer listed above with your
              appeal and freeCodeCamp Nashville will review the case.
            </p>

            <p className="mb-5">
              This code of conduct was originally derived from the{' '}
              <a href="https://pynash.org/code-of-conduct">
                PyNash Code of Conduct.
              </a>
            </p>

            <p className="mb-5">
              The freeCodeCamp Nashville Code of Conduct is similarly licensed
              under a{' '}
              <a href="https://creativecommons.org/licenses/by/3.0/">
                Creative Commons Attribution 3.0 Unported License.
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CodeOfConductPage;
