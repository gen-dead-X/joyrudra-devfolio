import React, { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { UserContext } from "@/app/context/user.content";
import urls from "@/shared/enums/urls";
import type { Profile } from "@/shared/types/user.type";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { profile, setProfile } = useContext(UserContext);
  const navigate = useRouter();

  const {
    data: profileData,
    isPending: isValidationPending,
    error,
  } = useQuery<Profile>({
    queryKey: [urls.profile],
  });

  useEffect(() => {
    if (profileData) {
      setProfile(profileData);
    }

    if (error) {
      console.log("error");
      navigate.push("/sign-in");
    }
  }, [profileData]);

  if (!profileData) {
    return <>Loading Profile</>;
  }

  if (isValidationPending) {
    return <div>Loading</div>;
  }

  return <div>Navbar</div>;
}
