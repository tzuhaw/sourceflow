import Image from "next/image";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./globals.css";

export default function Home() {
  const whoWeWorkList = [
    {
      imagePath: "/image/microsoft_logo.svg",
      imageName: "Microsoft Logo",
    },
    {
      imagePath: "/image/oracle_logo.svg",
      imageName: "Microsoft Logo",
    },
    {
      imagePath: "/image/atlassian_logo.svg",
      imageName: "Microsoft Logo",
    },
    {
      imagePath: "/image/cloudflare_logo.svg",
      imageName: "Microsoft Logo",
    },
    {
      imagePath: "/image/vmware_logo.svg",
      imageName: "Microsoft Logo",
    },
  ];
  const OPTIONS: EmblaOptionsType = { align: "start" };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <main>
      {/* Hero Section py-5*/}
      <section className="_bg-primary text-white position-relative">
        <div className="top-left-bg"></div>
        <div className="bottom-right-bg"></div>
        <div className="container py-5 position-relative z-2">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <p className="fs-6 fw-medium">Software Recruitment Specialists</p>
              <h1 className="display-5 fw-bold mb-4">Elevate your career</h1>

              <div className="d-flex justify-content-center">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-0 ps-4 py-3 custom-left-rounded"
                    placeholder="E.g. networking"
                    aria-label="Job Search"
                  />
                  <button
                    className="btn btn-warning fw-medium px-4 custom-right-rounded fs-sm"
                    type="button">
                    Search jobs
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <div
                className="position-relative"
                style={{
                  height: "320px",
                  maxWidth: "320px",
                  margin: "0 auto",
                }}>
                <Image
                  src="/image/banner.jpg"
                  alt="Professional with tablet"
                  fill
                  className="rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-light py-4">
        <div className="container">
          <p className="text-center text-muted small opacity-25">
            Who we work with
          </p>
          <div className="row justify-content-center align-items-center">
            {whoWeWorkList.map((data, index) => (
              <div
                key={index}
                className="col-6 col-md-2 text-center mb-3 mb-md-0">
                <img
                  src={data.imagePath}
                  alt={data.imageName}
                  className="w-50"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Jobs Section */}
      <section className="py-5 _bg-info">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-title fs-1">
            Latest Jobs
          </h2>
          <div className="">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </section>
    </main>
  );
}
