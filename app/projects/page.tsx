import Image from "next/image";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black font-sans">
      <main className="flex flex-col items-center text-center px-6 pt-32">
        {/* Name */}
        <h1 className="text-4xl font-bold mb-10 text-black dark:text-white">
          About Me
        </h1>
        
        <p className="text-xl mb-10 text-black dark:text-white">
          I&apos;m a distributed systems enthusiast and a deep learning / AI researcher with a passion for creating high-performance services.<br/>
          I love diving into the intricacies of distributed systems, pushing the boundaries of performance, <br/>
          and experimenting with advanced algorithms and AI-driven techniques.
        </p>
        
        {/* Social Links */}
        <div className="flex flex-col items-center gap-4">
          <a
            className="flex items-center gap-3 text-lg text-black dark:text-white hover:opacity-70"
            href="https://github.com/udayangaac"
            target="_blank"
          >
            <FaGithub className="w-6 h-6" />
            Github
          </a>

          <a
            className="flex items-center gap-3 text-lg text-black dark:text-white hover:opacity-70"
            href="https://medium.com/@udayangaac"
            target="_blank"
          >
            <FaMedium className="w-6 h-6" />
            Medium
          </a>

          <a
            className="flex items-center gap-3 text-lg text-black dark:text-white hover:opacity-70"
            href="https://linkedin.com/in/udayangaac"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6" />
            LinkedIn
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-40 text-sm text-zinc-600 dark:text-zinc-400">
          © 2020 - chamith.me
        </footer>
      </main>
    </div>
  );
}