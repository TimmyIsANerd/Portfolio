import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import enroute from "../../Assets/Projects/Portfolio/Enroute/enrouteacademics.png";
import fet from "../../Assets/Projects/Portfolio/fet/fet.com.ng.png";
import tmh from "../../Assets/Projects/Portfolio/The Moon House/the_moon_house_pc.png";
import rhb from "../../Assets/Projects/Portfolio/Reboboth/rehoboth_pc.png";
import everys from "../../Assets/Projects/Portfolio/Everys/everys_pc.png";
import ehub from "../../Assets/Projects/Portfolio/Excelhence Hub/excelhence.png";
import myjobselfie from "../../Assets/Projects/Portfolio/MyJobSelfie/index.html.png";
import provest from "../../Assets/Projects/Portfolio/Provest/provest_lg.png";
import nomsycares from "../../Assets/Projects/Portfolio/NomsyCares/index.html.png";
import audiobaze from "../../Assets/Projects/audiobaze.png";
import winifred from "../../Assets/Projects/winifred.png";
import assetcradle from "../../Assets/Projects/assetcradle.png";

// Web3 Projects
import bsctoken from "../../Assets/Projects/bsctoken_project.png";
import stephnft from "../../Assets/Projects/stephnft.png";
import nftfightresult from "../../Assets/Projects/nftresultminter.png";
import waveportal from "../../Assets/Projects/waveportal.png";
import solananft from "../../Assets/Projects/solanaproject.png";
import tokenVendor from "../../Assets/Projects/token vendor.png";
import staker from "../../Assets/Projects/staking.png";
import nft from "../../Assets/Projects/nft.png";
import bit from "../Assets/Projects/bittorrent.png";

// Typescript Projects
import hexnews from "../../Assets/Projects/hexnews.PNG";
import lyrics from "../../Assets/Projects/rapidlyrics.png";

// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Currently</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <h2 className="text-white">
              Full Stack Blockchain Developer @
              <a href="https://vefinetwork.org/" className="purple">
                VeFi
              </a>{" "}
            </h2>
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent{" "}
          <strong className="purple">Web3 (Blockchain) Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bsctoken}
              isBlog={false}
              title="Bit Torrent Clone"
              description="Bit Torrent Clone with Functionality"
              link="https://bridge-page.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bsctoken}
              isBlog={false}
              title="Binance Smart Chain Token Deployed (Test Net) "
              description="
              Created BSC Token
              TimmyToken (TTKN)
              Using Solidity & OpenZeppelin

              Contract Address @Deployment
              0x48e2c7f28c652ed33ac04f41e8c7b1d0cc61f352
              "
              link="https://gist.github.com/TimmyIsANerd/72104e60d8f4c77a8ac891c925f5a554"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solananft}
              isBlog={false}
              title="Medieval NFT Solana Drop Project"
              description="
              Minted an NFT Collection on the Solana Blockchain using Solana & Metaplex Candy Machine,
              All NFTs are locked and Unmintable until December 29th, 2021.
              "
              link="https://solananftdapp.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stephnft}
              isBlog={false}
              title="Steph NFT Minting Platform (Test Net)"
              description="
              NFT Minter Application Built and Hosted to Mint NFTs using Rarible Plugin and Moralis Js, NFTs are instantly published to Rarable NFT Market Place with Zero Gas Fees.
              "
              link="https://rariblenftminter.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nftfightresult}
              isBlog={false}
              title="Anime/MCU Fight Results NFT Collection"
              description="
              NFT Minter Project of Mine, randomly generates an NFT with random unique text characters and deploys it to OpenSea.io, I wrote the smart contract to only permit a total of 50 NFTs to be generated in total
              "
              link="https://nftfightresult.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waveportal}
              isBlog={false}
              title="Blockchain Wave Portal"
              description="
              Wave portal project, I built it to let people leave me a message via the solidity smart contract and it has a feature that is something of a lottery system that awards Fake ethereum to any random user.
              "
              link="http://comesayhello.herokuapp.com/"
            />
          </Col>
        </Row>

        <h2 className="project-heading">
          Ethereum<strong className="purple"> SpeedRun Projects </strong>
        </h2>

        <p style={{ color: "white" }}>
          Working with Scaffold ETH <br />
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tokenVendor}
              isBlog={false}
              title="Token Vendor DApp"
              description="Token Vendor DApp built with Solidity, Hardhat Scaffold-ETH Boilerplate & React, compiled and deployed to Rinkeby Testnet, Login with MetaMask to Test Project"
              link="http://deep-can.surge.sh/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={staker}
              isBlog={false}
              title="Decentralized Staking DApp"
              description="Decentralized Staking DApp built with Solidity, Hardhat Scaffold-ETH Boilerplate & React, compiled and deployed to Rinkeby Testnet, Login with MetaMask to Test Project"
              link="http://terrific-quarter.surge.sh/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nft}
              isBlog={false}
              title="Simple NFT Dapp Wallet"
              description="Simple NFT DApp built with Solidity, Hardhat Scaffold-ETH Boilerplate & React, compiled and deployed to Rinkeby Testnet, Login with MetaMask to Test Project"
              link="http://shocking-apple.surge.sh/"
            />
          </Col>
        </Row>

        <h2 className="project-heading">
          TypeScript<strong className="purple"> Projects </strong>
        </h2>

        <p style={{ color: "white" }}>
          Projects I played around with <br />
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hexnews}
              isBlog={false}
              title="Hex News App"
              description="News Search Application made with TypeScript + Next Js + Tailwind CSS and Web Search API, You can input queries to find any kind of News on the Web."
              link="https://timmy-nextjs-news.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lyrics}
              isBlog={false}
              title="Rapid Lyrics Search App"
              description="Rapid Lyrics Search API made with TypeScript + Next Js + Tailwind CSS and Genius Lyrics API, You can use it to find lyrics to your favorite songs"
              link="https://rapid-lyrics-search-app.vercel.app/"
            />
          </Col>
        </Row>

        <h2 className="project-heading">
          My Recent <strong className="purple">Web2 Projects </strong>
        </h2>
        <p style={{ color: "white" }}>
          I have a few projects on here I've worked on <br />
          Want to see more?{" "}
          <a href="mailto:adefeyitimi@gmail.com" className="purple">
            Email Me
          </a>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assetcradle}
              isBlog={false}
              title="Asset Cradle"
              description="Asset Cradle is a unique marketplace, that provides a transparent, fast and secure environment for the seamless exchange and trading of Non Fungible Tokens (NFTs) and assets eg Art, Music, Properties, etc and digital assets, leveraging on the possibilities of the Blockchain technology and Web3.0."
              link="https://assetcradle.org"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={winifred}
              isBlog={false}
              title="Winifred Liam's Portfolio Site"
              description="Built with Next Js and deployed to Vercel, Winifred Liam is an avid reader, and she wears many hats most times an Indie Author of three published books on Amazon and bambooks. Ghostwriter, Virtual assistant, and IT support specialists. "
              link="https://winifred-liam.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audiobaze}
              isBlog={false}
              title="Audiobaze Dashboard"
              description="Audiobaze is a platform that provides Stream Boosting, Via Spotify/YouTube Bots and could provide as much as 500k streams on your spotify account, this dashboard was built as user management system which runs on an API that the Bots communicate with, via this platform, your license is verified so you can use the spotify bot services to boost your stream."
              link="https://audiobaze.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enroute}
              isBlog={false}
              title="Enroute Academics"
              description="
              Your sure route to the United Kingdom.
              Enroute Academics was founded to meet the educational travel consultancy needs of the Nigerian Market to the United Kingdom.

              The organization is a visionary start-up focused on providing consultation, ease and completion of emigration of Nigerians and their families into the United Kingdom.
              "
              link="https://enrouteacademics.travel/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fet}
              isBlog={false}
              title="Fet Online"
              description="Have French language lessons shaped to
              fit your schedule with a trained French
              language teacher. 
              Do you need a community
              where you can meet French
              speakers and practise with?
              You can join here!
              "
              link="https://fet.com.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tmh}
              isBlog={false}
              title="The Moon House"
              description="The Moon House is the perfect hub for crypto education and growth, They offer crypto learning services, mentorship, Building Wealth by investing in cryptocurrency is really easy and you do not even have to be an expert, So why keep your money in the bank when you can have it work for you? The Moon House is offering massive returns on investment."
              link="https://themoonhouse.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rhb}
              isBlog={false}
              title="Rehoboth ENT Hospital"
              description="Rehoboth Ear, Nose and Throat Hospital was established to provide clinical acumen and fine surgical skills to patients with ear, nose and throat challenges. The hospital aims to provide effective and holistic solutions to diseases of ear nose and throat regions of the body. The hospital also strives to promote improvement in patients care through regular upgrading of its facilities."
              link="https://rehobothenthospital.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={everys}
              isBlog={true}
              title="Everys Blog"
              description="Built the Blog using Wordpress, It is a platform that shares content about very interesting topics including DIY, Life Hacks, Lists, Reviews, ASHThursday, Events, Photography, Wildlife/Nature"
              link="https://everys.com.ng/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ehub}
              isBlog={false}
              title="Excelhence Hub"
              description="ExcelHence Hub is a growing community of global experts whose essence is global leadership and expertise that thrives on KNOWLEDGE, ATTITUDE , and SKILLS. The community is dedicated to solving the social problem of unemployment through viability trainings and the communication of perpetual cultures such as teamwork, creativity and ultimately excellence which is achieved by its accountability structure that hinges on practical systems of training and mentorship."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nomsycares}
              isBlog={false}
              title="NomsyCares Foundation"
              description="Nomsy Cares Foundation is a registered non profit organisation and Non Governmental Organisation (NGO) They plan and carry out projects relating to the girl child to accomplish their objectives."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myjobselfie}
              isBlog={false}
              title="MyJobSelfie"
              description="MyJobSelfie is a platform built with the intent to lessen the need for in person interviews with prospective employees. It is responsive and entirely built using the Bootstrap Library"
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={provest}
              isBlog={false}
              title="Provest"
              description="Provest allows you to invest [according to your capacity] in real estate easily. Your returns on investment is paid every week. Provestors earn between 20% to 50% returns within a four month contract span, and still have the option of withdrawing their capital or reinvesting it."
              link="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
