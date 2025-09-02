import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";import { FaSquareGithub } from "react-icons/fa6";



export default function Footer() {
  return (
    <footer className="text-indigo-100 bg-gray-900/90">
      <div className=" px-6 py-12">
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-0 mx-10 md:justify-between md:items-start">
          <div>
            <Link href="/" className="text-xl md:text-[26px] hover:bg-gradient-to-r bg-gradient-to-tr from-red-600 via-indigo-200 to-indigo-500 text-transparent bg-clip-text font-bold hover:text-transparent transition-colors">
                UniqueKeys
            </Link>            
            <p className="text-sm w-80 mt-1">
              Better way to protect, detect and recover your assets because losing access shouldn&apos;t mean losing everything.
            </p>
          </div>

          <div>
            <h3 className=" text-indigo-100/60 font-semibold mb-3">Learn more</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-indigo-400 text-base">Home</Link></li>
              <li><Link href="/" className="hover:text-indigo-400 text-base">Sign up</Link></li>
              <li><Link href="/" className="hover:text-indigo-400 text-base">Sign in</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 text-base">Contact</Link></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-indigo-100/60 font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-indigo-400 text-base">Docs</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 text-base">Features</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 text-base">Community</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 text-base">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-indigo-100/60 font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/uniquegold_?s=21&t=sAyyvy8imEnqNVAps9WQUg" className="hover:text-indigo-400 text-2xl">
                <FaSquareXTwitter />
              </a>
              <a href="https://www.linkedin.com/in/ikeoluwa-adegbite-66b62b332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-indigo-400 text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Unique-Ikeoluwa/unique-keys" className="hover:text-indigo-400 text-2xl">
                <FaSquareGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} UniqueKeys. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
