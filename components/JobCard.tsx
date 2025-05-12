"use client";

import { useRouter } from "next/navigation";

interface JobCardProps {
  categoryTitle: string;
  title: string;
  locationTitle: string;
  salary: string;
  description: string;
  link: string;
  createdAt: string;
  bgColor: string;
  textColor: string;
}

export default function JobCard({
  categoryTitle,
  title,
  locationTitle,
  salary,
  description,
  link,
  createdAt,
  bgColor,
  textColor,
}: JobCardProps) {
  const router = useRouter();
  return (
    <div className="col-md-4 col-sm-12 col-12 mb-4 ps-3 pe-3">
      <div
        className={`card h-100 ${bgColor} bg-opacity-25 border-0 rounded-12px`}>
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-3 bg-white rounded me-2 p-1 max-width-80">
            <img
              src="/image/python.svg"
              alt="python"
              className="image-16 me-1"
            />
            <span className={`small fw-medium text-content-primary`}>
              {categoryTitle}
            </span>
          </div>
          <h3 className={`card-title h5 fw-bold ${textColor}`}>{title}</h3>
          <div className="mb-3">
            <div className="d-flex align-items-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`${textColor}`}
                viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>

              <span className={`ms- small ${textColor}`}>{locationTitle}</span>
            </div>
            <div className="d-flex align-items-center">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="16.000000pt"
                height="16.000000pt"
                viewBox="0 0 25.000000 25.000000"
                preserveAspectRatio="xMidYMid meet">
                <g
                  transform="translate(0.000000,25.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  className={`${textColor} me-2`}
                  stroke="none">
                  <path
                    d="M40 125 l0 -55 85 0 85 0 0 55 0 55 -85 0 -85 0 0 -55z m142 28 c22
-20 23 -31 1 -55 -31 -34 -133 -15 -133 25 0 43 94 64 132 30z"
                  />
                  <path
                    d="M102 128 c2 -15 10 -23 23 -23 13 0 21 8 23 23 3 18 -1 22 -23 22
-22 0 -26 -4 -23 -22z"
                  />
                </g>
              </svg>
              <span className={`ms-2 small ${textColor}`}>£{salary}</span>
            </div>
          </div>

          <p className={`small ${textColor} mb-4`}>{description}</p>
          <button
            onClick={() => router.push(link)}
            className="btn btn-outline-light w-100 bg-white text-primary rounded-pill">
            View this job
          </button>
          <p className={`small ${textColor} mt-2 opacity-50`}>
            Posted on {createdAt}
          </p>
        </div>
      </div>
    </div>
  );
}
