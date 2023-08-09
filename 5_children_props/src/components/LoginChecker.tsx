import { ReactNode } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface loginCheckerProps {
  children: ReactNode;
}
type checkState = "checking" | "hasToken" | "noToken";

function LoginChecker(props: loginCheckerProps) {
  const [checked, setChecked] = useState<checkState>("checking");

  useEffect(() => {
    const tokenFromLs = localStorage.getItem("token");
    if (!tokenFromLs) {
      setChecked("noToken");
    } else {
      setChecked("hasToken");
    }
  }, []);
  if (checked === "checking") {
    return (
      <div>
        <p>Checking Auth..</p>
      </div>
    );
  }

  if (checked === "noToken") {
    return (
      <div>
        <p>
          You are not logged in. Please <Link href="/login">Log in</Link>.
        </p>
      </div>
    );
  }

  if (checked === "hasToken") {
    return <>{props.children}</>;
  } else {
    return null;
  }
}

export default LoginChecker;
