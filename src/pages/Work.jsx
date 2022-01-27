import React from 'react'
import { Link } from 'react-router-dom'
import useDarkMode from 'use-dark-mode'
import {
  HomeLight,
  Home,
  ExternalLink,
  ExternalLinkLight,
} from '../assets/icons'
import { MWTW, WhatAYear, Quiz } from '../assets/images'
import styles from './Work.module.css'

const Work = () => {
  const { value: darkMode } = useDarkMode()
  const projects = [
    {
      id: 1,
      imageURL: Quiz,
      imageAlt: 'Vacation Quiz, a quiz to help you find your dream vacation.',
      projectURL:
        'https://www.cntraveler.com/story/where-should-you-go-on-vacation-next',
      title: 'Where should you go on a vacation next?',
      description:
        'This was a project for Condé Nast Traveller. Lead the development of the quiz. Main features include SVG path animations, complex quiz logic.',
    },
    {
      id: 2,
      imageURL: MWTW,
      imageAlt:
        'A learning space for people suffering from chronic health conditions.',
      projectURL: 'https://www.self.com/package/my-way-to-well',
      title: 'My Way To Well',
      description:
        'Project for SELF. Developed "The Numbers" section in both Migraine & Psoriasis pages.',
    },
    {
      id: 3,
      imageURL: WhatAYear,
      imageAlt: 'Review of the year 2020 for Condé Nast.',
      projectURL: '',
      title: '2020 - What a year!',
      description:
        'Internal scrollytelling website analyzing trends and patterns from Condé Nast websites. Consists of animated cluster charts, parallax image gallery, custom visualizations and lots more - all animated through scroll-triggers.',
    },
  ]
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.home} to="/me">
          <img
            className={styles.homeIcon}
            src={darkMode ? HomeLight : Home}
            alt="Return to landing page."
          />
        </Link>
        <p className={styles.separator}>/</p>
        <p className={styles.currentPath}>Work</p>
      </nav>
      <section className={styles.content}>
        <h1 className={styles.title}>Recent Works</h1>
        <div className={styles.projectContainer}>
          {projects.map((proj) => (
            <article className={styles.article} key={proj.id}>
              <div className={styles.imageContainer}>
                <figure className={styles.figure}>
                  <img
                    className={styles.image}
                    style={{
                      border: `1px solid ${darkMode ? '#fafafa72' : 'black'}`,
                    }}
                    src={proj.imageURL}
                    alt={proj.imageAlt}
                  />
                  <figcaption className={styles.imageCaption}>
                    {proj.imageAlt}
                  </figcaption>
                </figure>
              </div>
              {proj.projectURL ? (
                <a
                  className={styles.link}
                  href={proj.projectURL}
                  target="_blank"
                  rel="noreferrer">
                  <h3 className={styles.projectTitle}>
                    {proj.title}
                    <span>
                      <img
                        className={styles.externalLinkIcon}
                        src={darkMode ? ExternalLinkLight : ExternalLink}
                        alt={`Redirect to external link for the project ${proj.title}`}
                      />
                    </span>
                  </h3>
                  <p>{proj.description}</p>
                </a>
              ) : (
                <>
                  <h3 className={styles.projectTitle}>{proj.title}</h3>
                  <p>{proj.description}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Work
