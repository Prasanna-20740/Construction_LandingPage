import React, { useState } from 'react';
import { Eye, Plus, X, ExternalLink } from 'lucide-react';
import p1 from '../assets/images/project-1.jpg';
import p2 from '../assets/images/project-2.jpg';
import p3 from '../assets/images/project-3.jpg';
import p4 from '../assets/images/project-4.jpg';
import p5 from '../assets/images/project-5.jpg';
import p6 from '../assets/images/project-6.jpg';
import p7 from '../assets/images/project-7.jpg';
import p8 from '../assets/images/project-8.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMobileCardId, setActiveMobileCardId] = useState(null);

  React.useEffect(() => {
    const handleOutsideClick = () => {
      setActiveMobileCardId(null);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleCardClick = (e, project) => {
    e.stopPropagation();
    if (window.innerWidth <= 1024) {
      // Exactly ONE card chosen at a time
      if (activeMobileCardId === project.id) {
        setSelectedProject(project);
      } else {
        setActiveMobileCardId(project.id);
      }
    } else {
      setSelectedProject(project);
    }
  };

  const filters = [
    'All',
    'Architecture',
    'Building',
    'Construction',
    'Maintenance',
    'Road Construction'
  ];

  const projects = [
    {
      id: 1,
      title: "Riverview Green Building",
      categories: ["Building", "Road Construction"],
      image: p1 || "/images/project-1.jpg",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/tick_tock-1-1-600x600.jpg",
      year: "2024",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      title: "The Langham Hotel",
      categories: ["Building", "Construction"],
      image: p2 || "/images/project-2.jpg",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/personal_gift-1-600x600.jpg",
      year: "2023",
      location: "Chicago, IL"
    },
    {
      id: 3,
      title: "Villa Rustica Renovation",
      categories: ["Construction", "Road Construction"],
      image: p3 || "/images/project-3.jpg",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio7-1-600x600.jpg",
      year: "2024",
      location: "Miami, FL"
    },
    {
      id: 4,
      title: "Land Rustica Renovation",
      categories: ["Building", "Maintenance"],
      image: p4 || "/images/project-4.jpg",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio10-1-600x600.jpg",
      year: "2023",
      location: "Austin, TX"
    },
    {
      id: 5,
      title: "Kitchen And Living Room",
      categories: ["Architecture", "Building"],
      image: p5 || "/images/project-5.jpg",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio3-1-600x600.jpg",
      year: "2024",
      location: "Seattle, WA"
    },
    {
      id: 6,
      title: "House Under The Palms",
      categories: ["Construction", "Road Construction"],
      image: p6 || "/images/project-6.jpg",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio6-1-600x600.jpg",
      year: "2023",
      location: "Los Angeles, CA"
    },
    {
      id: 7,
      title: "Green House",
      categories: ["Construction", "Road Construction"],
      image: p7 || "/images/project-7.jpg",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio9-1-600x600.jpg",
      year: "2024",
      location: "Denver, CO"
    },
    {
      id: 8,
      title: "Inside renovation",
      categories: ["Construction", "Road Construction"],
      image: p8 || "/images/project-8.jpg",
      fallback: "https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/portfolio2-1-600x600.jpg",
      year: "2023",
      location: "Boston, MA"
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="projects-section">
      <div className="container projects-container">
        {/* Section Heading */}
        <div className="section-title-wrap text-center">
          <span className="watermark-text">PROJECTS</span>
          <p className="section-subtitle">WE ARE PROFESSIONAL</p>
          <h2 className="section-title">Our latest projects</h2>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters-wrap">
          <ul className="project-filters-list">
            {filters.map((filter) => (
              <li key={filter}>
                <button
                  type="button"
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects 4x2 Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-grid-item"
              onClick={(e) => handleCardClick(e, project)}
            >
              <div className={`project-card ${activeMobileCardId === project.id ? 'mobile-active' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  onError={(e) => {
                    if (project.fallback && e.currentTarget.src !== project.fallback) {
                      e.currentTarget.src = project.fallback;
                    }
                  }}
                />

                {/* Hover Overlay */}
                <div className="project-hover-overlay">
                  <div className="overlay-icon-wrap">
                    <span className="project-action-icon">
                      <ExternalLink size={20} className="project-external-icon" />
                      <Plus size={24} className="project-plus-icon" />
                    </span>
                  </div>

                  <div className="overlay-info">
                    <h3 className="project-hover-title">{project.title}</h3>
                    <p className="project-hover-categories">
                      {project.categories.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="modal-content-grid">
              <div className="modal-img-col">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-project-img"
                  onError={(e) => {
                    if (selectedProject.fallback && e.currentTarget.src !== selectedProject.fallback) {
                      e.currentTarget.src = selectedProject.fallback;
                    }
                  }}
                />
              </div>

              <div className="modal-info-col">
                <span className="modal-tag">{selectedProject.categories.join(' • ')}</span>
                <h3 className="modal-project-title">{selectedProject.title}</h3>
                <p className="modal-project-desc">
                  Completed with precision structural engineering, energy-efficient building materials, and contemporary interior detailing meeting the highest industry benchmarks.
                </p>
                <div className="modal-meta-list">
                  <div><strong>Location:</strong> {selectedProject.location}</div>
                  <div><strong>Year Completed:</strong> {selectedProject.year}</div>
                  <div><strong>Status:</strong> Successfully Handed Over</div>
                </div>
                <a href="#quote" onClick={() => setSelectedProject(null)} className="btn btn-primary modal-cta">
                  Inquire About Similar Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
