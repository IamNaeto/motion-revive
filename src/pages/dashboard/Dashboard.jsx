import React, { useContext, PureComponent, useState } from "react";
import "./Dashboard.css";
import { ThemeContext } from "../../ThemeContext";
import Charts from "../../components/Charts";
import { MdTrendingDown, MdTrendingUp } from "react-icons/md";
import { FaPersonWalking } from "react-icons/fa6";
import { BsPersonStanding } from "react-icons/bs";
import ExerciseOne from "../../assets/exercise-one.png"
import ExerciseTwo from "../../assets/exercise-two.png"
import ExerciseThree from "../../assets/exercise-three.png"

const Dashboard = () => {
  const { DarkTheme } = useContext(ThemeContext);

  const [isImproving, setIsImproving] = useState(true);

  return (
    <div className={`dashboard ${DarkTheme && "dark"}`}>
      <h1 className="page-title">Your Performance</h1>
      <div className="card-row">
        <div className="card-group-one">
          <div className="card-chart-content">
            <div className="chart-title">
              <h1 className="title-header">Active vs Sedentary</h1>
              <p className="text-sub">
                your active vs sendentary chart in the last 7 days
              </p>
            </div>
            <div className="card-chart">
              <Charts />
            </div>
          </div>

          <div className="group-activity">
            <div className="card-activity-content">
              <div className="chart-title">
                <h1 className="title-header">Active vs Sedentary</h1>
                <div className="sub-title-text">
                <p className="text-sub">Active hours</p>
                <p className="text-sub">Sendentary hours</p>
                </div>
                
              </div>
              <div className="exercise-card-group active-card">
                <div className="card-active">
                  <div className="active-container">
                    <FaPersonWalking className="moving-icon" />
                    <div className="total-count">
                      <h3 className="number-text">Total days active</h3>
                      <h1 className="number-title">0</h1>
                    </div>
                    <div className="trending-icon">
                      {!isImproving ? (
                        <MdTrendingDown
                          style={{ color: "red", marginLeft: "5px" }}
                          className="icon-trending"
                        />
                      ) : (
                        <MdTrendingUp
                          style={{ color: "green", marginLeft: "5px" }}
                          className="icon-trending"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="card-sedentary">
                  <div className="sedentary-container">
                    <BsPersonStanding className="standing-icon" />
                    <div className="total-count">
                      <h3 className="number-text">Total days sedentary</h3>
                      <h1 className="number-title">0</h1>
                    </div>

                    <div className="trending-icon">
                      {isImproving ? (
                        <MdTrendingDown
                          style={{ color: "red", marginLeft: "5px" }}
                          className="icon-trending"
                        />
                      ) : (
                        <MdTrendingUp
                          style={{ color: "green", marginLeft: "5px" }}
                          className="icon-trending"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-group-three">
          <div className="card-goal-content">
            <div className="goal-title">
              <h1 className="title-header">Goals</h1>
              <p className="text-sub">
                your active vs sendentary chart in the last 7 days
              </p>
            </div>
            <div className="goal-card-group">
              <div className="card-goal">
                <div className="field">
                  <div className="input-group">
                    <label htmlFor="set-task" className="set-task">
                      Set Task
                    </label>
                    <input
                      type="text"
                      id="set-task"
                      name="set-task"
                      placeholder="please input task"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="active-time" className="active-task">
                      Select active time
                    </label>
                    <select id="active-time" name="active-time">
                    <option value="" disabled selected>Select active time</option>
                      <option value="option1">20mins</option>
                      <option value="option2">30mins</option>
                      <option value="option3">1hr</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label htmlFor="sedentary-time" className="sedentary-task">
                      Select sedentary time
                    </label>
                    <select id="sedentary-time" name="sedentary-time">
                    <option value="" disabled selected>Select sedentary time</option>
                      <option value="option1">1hr</option>
                      <option value="option2">2hrs</option>
                      <option value="option3">3hrs</option>
                    </select>
                  </div>
                  <div className="btn-session">
                  <button className="session-button">Start Session</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-group-three">
          <div className="card-exercise-content">
            <div className="exercise-title">
              <h1 className="title-header">Recommended Exercise</h1>
              <div className="sub-title">
              <p className="text-sub">
                Your Recommended exercises
              </p>
              <p className="text-sub">
                Your completed exercises
              </p>
              </div>
             
            </div>
            <div className="exercise-card-group">
              <div className="card-exercise">
                    <div className="recommended">
                      <button className="exercise-one exercise">
                        <img src={ExerciseOne} alt="" className="exercise-image"/>
                        <h1>Triangel Foward</h1>
                      </button>
                      <button className="exercise-two exercise">
                        <img src={ExerciseTwo} alt="" className="exercise-image" />
                        <h1>Tree Poses</h1>
                      </button>
                      <button className="exercise-three exercise">
                        <img src={ExerciseThree} alt="" className="exercise-image" />
                        <h1>Warrior Poses</h1>
                      </button>
                    </div>
              </div>
              
              <div className="card-exercise">
              <div className="recommended">
                      <button className="exercise-one exercise-status">
                        <img src={ExerciseOne} alt="" className="exercise-image"/>
                        <h1>Triangel Foward</h1>
                        <h3>Completed</h3>
                      </button>
                      <button className="exercise-two exercise-status">
                        <img src={ExerciseTwo} alt="" className="exercise-image" />
                        <h1>Tree Poses</h1>
                        <h3>Completed</h3>
                      </button>
                      <button className="exercise-three exercise-status">
                        <img src={ExerciseThree} alt="" className="exercise-image" />
                        <h1>Warrior Poses</h1>
                        <h3>Skipped</h3>
                      </button>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
