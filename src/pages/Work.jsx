import React from 'react'
import { Link } from 'react-router-dom'
import useDarkMode from 'use-dark-mode'
import {
  HomeLight,
  Home,
  ExternalLink,
  ExternalLinkLight,
} from '../assets/icons'
import projects from '../utils/work'
import routes from '../routes'
import styles from './Work.module.css'

const Work = () => {
  const { value: darkMode } = useDarkMode()
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.home} to={routes.home}>
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
                    src={proj.img}
                    alt={proj.imgAlt}
                  />
                  <figcaption className={styles.imageCaption}>
                    {proj.imgAlt}
                  </figcaption>
                </figure>
              </div>
              {proj.url ? (
                <a
                  className={styles.link}
                  href={proj.url}
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
