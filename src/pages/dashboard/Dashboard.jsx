import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import { ThemeContext } from "../../ThemeContext";
import Charts from "../../components/Charts";
import { MdTrendingDown, MdTrendingUp } from "react-icons/md";
import { FaPersonWalking } from "react-icons/fa6";
import { BsPersonStanding } from "react-icons/bs";
import exercises from "../../Exercises";
import { startSession } from "../../sessionUtils";
import { activeTimes, sedentaryTimes } from "../../sessionUtils";

const Dashboard = () => {
  const { DarkTheme } = useContext(ThemeContext);

  const [isImproving, setIsImproving] = useState(true);
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(null);
  const [randomExercises, setRandomExercises] = useState([]);
  const [totalHoursActive, setTotalHoursActive] = useState(0);
  const [totalHoursSedentary, setTotalHoursSedentary] = useState(0);

  const [activeTimeGoal, setActiveTimeGoal] = useState("");
  const [sedentaryTimeGoal, setSedentaryTimeGoal] = useState("");

  useEffect(() => {
    let activeTimeTotal = 0;
    let sedentaryTimeTotal = 0;

    for (let i = 0; i < activeTimes.length; i++) {
      activeTimeTotal += activeTimes[i];
      sedentaryTimeTotal += sedentaryTimes[i];
    }

    setTotalHoursActive(activeTimeTotal);
    setTotalHoursSedentary(sedentaryTimeTotal);
  }, [activeTimes, sedentaryTimes]);

  const handleActiveTimeGoalChange = (e) => {
    setActiveTimeGoal(e.target.value);
  };

  const handleSedentaryTimeGoalChange = (e) => {
    setSedentaryTimeGoal(e.target.value);
  };

  const openExerciseVideo = () => {
    const randomIndexes = [];
    while (randomIndexes.length < 3) {
      const randomIndex = Math.floor(Math.random() * exercises.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    setRandomExercises(
      randomIndexes.map((index) => ({ ...exercises[index], status: null }))
    );
  };

  const closeExerciseVideo = (index) => {
    const updatedExercises = [...randomExercises];
    updatedExercises[index] = { ...updatedExercises[index], status: "skipped" };
    setRandomExercises(updatedExercises);
  };

  const markExerciseAsCompleted = (index) => {
    const updatedExercises = [...randomExercises];
    updatedExercises[index] = {
      ...updatedExercises[index],
      status: "completed",
    };
    setRandomExercises(updatedExercises);
  };

  useEffect(() => {
    openExerciseVideo();
  }, []);

  return (
    <div className={`dashboard ${DarkTheme && "dark"}`}>
      <h1 className="page-title">Your Performance</h1>
      <div className="card-row">
        <div className="card-group-one">
          <div className="card-chart-content">
            <div className="chart-title">
              <h1 className="title-header">Active vs Sedentary</h1>
              <p className="text-sub">
                your active vs sedentary chart in the last 7 days
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
              </div>
              <div className="exercise-card-group active-card">
                <div className="card-active">
                  <div className="active-container">
                    <FaPersonWalking className="moving-icon" />
                    <div className="total-count">
                      <h3 className="number-text">Total hours active</h3>
                      <h1 className="number-title">{totalHoursActive}</h1>
                    </div>
                    <div className="trending-icon">
                      {totalHoursActive < parseInt(activeTimeGoal) ? (
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
                      <h3 className="number-text">Total hours sedentary</h3>
                      <h1 className="number-title">{totalHoursSedentary}</h1>
                    </div>
                    <div className="trending-icon">
                      {totalHoursSedentary < parseInt(sedentaryTimeGoal) ? (
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

        <div className="card-group-two">
          <div className="card-goal-content">
            <div className="goal-title">
              <h1 className="title-header">Goals</h1>
              <p className="text-sub">
                Set your active and sedentary goals
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
                    <select
                      id="active-time"
                      name="active-time"
                      value={activeTimeGoal}
                      onChange={handleActiveTimeGoalChange}
                    >
                      <option value="" disabled>
                        Select active time
                      </option>
                      <option value="20">20 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label htmlFor="sedentary-time" className="sedentary-task">
                      Select sedentary time
                    </label>
                    <select
                      id="sedentary-time"
                      name="sedentary-time"
                      value={sedentaryTimeGoal}
                      onChange={handleSedentaryTimeGoalChange}
                    >
                      <option value="" disabled>
                        Select sedentary time
                      </option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                      <option value="180">3 hours</option>
                    </select>
                  </div>
                  <div className="btn-session">
                    <button className="session-button" onClick={startSession}>
                      Start Session
                    </button>
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
                <p className="text-sub">Your Recommended exercises</p>
              </div>
            </div>
            <div className="exercise-card-group">
              <div className="card-exercise">
                <div className="recommended">
                  {randomExercises.map((exercise, index) => (
                    <div key={exercise.id} className="exercise-wrapper">
                      <button
                        className={`exercise-${exercise.id} exercise`}
                        onClick={() => setSelectedExerciseIndex(index)}
                      >
                        <img
                          src={exercise.gif}
                          alt=""
                          className="exercise-image"
                        />
                        <h1>{exercise.name}</h1>
                      </button>
                      {index === selectedExerciseIndex && (
                        <div className="gif-popup">
                          <img
                            src={exercise.gif}
                            alt=""
                            className="exercise-gif"
                          />
                          <div className="popup-buttons">
                            <button
                              onClick={() => {
                                closeExerciseVideo(index);
                                setSelectedExerciseIndex(null);
                              }}
                            >
                              Close
                            </button>
                            <button
                              onClick={() => {
                                markExerciseAsCompleted(index);
                                setSelectedExerciseIndex(null);
                              }}
                            >
                              Finished
                            </button>
                          </div>
                        </div>
                      )}
                      {exercise.status !== null && (
                        <div className="exercise-status">
                          {exercise.status === "completed" ? (
                            <span className="status-completed">Completed</span>
                          ) : (
                            <span className="status-skipped">Skipped</span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
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
