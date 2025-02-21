import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Hackathon from "./components/Hackathon";
import EventCard from "./components/EventCard";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Challenges from "./components/Challenges";
import FAQ from "./components/FAQ";
import Prize from "./components/Prize";
import styles from "./App.module.css";
import Footer from "../../components/common/Footer";
import EvaluationParameters from "./components/evaluationParameters";
const App = () => {
  return (
    <div className={styles.hackathonPage}>
      <div className={styles.appContainer}>
        <Navigation />
        <main className={styles.appContent}>
          <div className={styles.hero}>
            <HeroSection />
          </div>
          <EventCard />
          <Navbar />
          <div className={styles.mainContent}>
            <div className={styles.leftContent}>
              <About />
              <Challenges />
              <EvaluationParameters />
              <Timeline />
              <Prize />
              <FAQ />
            </div>
            <div className={styles.rightContent}>
              <Hackathon />
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default App;
