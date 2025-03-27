import EntryNavBar from "./components/EntryNavBar";
import NavButton from "./components/NavButton";
import SignInButton from "./components/SignInButton";


export default function Home() {

  return (
    <div>
    <EntryNavBar/>
    <div className="flex justify-center h-screen align-middle">
      <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Letter Nest</h1>
          <p className="py-6">
            A Secure Way to Make Recommendations Easier for Faculty, Students, and Job Seekers
          </p>
          <SignInButton/>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
