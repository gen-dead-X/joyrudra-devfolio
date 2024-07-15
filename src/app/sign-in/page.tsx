"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import "./_signin.scoped.scss";
import { UserContext } from "../context/user.content";
import type { Profile } from "@/shared/types/user.type";
import SignInUpLayout from "../ui/auth.layout/auth.layout";
import { TOKEN } from "@/shared/enums/global";
import { signInValidationSchema } from "@/validators/user.validators";
import {
  useGetMutationQuery,
  usePostMutationQuery,
} from "../hooks/useMutationQuery";
import SubmitButtonDefault from "../ui/global/buttons/submit.button.default/submit.button.default";
import AnimatedInput from "../ui/global/inputs/animated.input/animated.input";
import config from "@/config";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import urls from "@/shared/enums/urls";
import {
  ErrorNotistackToast,
  SuccessNotistackToast,
} from "../ui/global/toasts/notistack";
import { useQuery } from "@tanstack/react-query";

type LogInType = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { setProfile } = useContext(UserContext);
  const searchParams = useSearchParams();
  const form = useForm<LogInType>({
    resolver: yupResolver(signInValidationSchema),
  });
  const router = useRouter();
  const [tokens, setTokens] = useState({ access_token: "", refresh_token: "" });
  const { data: oAuthUrl, isPending: isOAuthPending } = useQuery<string>({
    queryKey: [urls.oAuth],
  });

  useEffect(() => {
    console.log({ oAuthUrl });
  }, [oAuthUrl]);

  const {
    data: profile,
    isPending: isValidationPending,
    refetch: getProfile,
  } = useQuery<{ data: Profile }>({
    queryKey: [urls.profile],
    enabled: false,
  });

  useEffect(() => {
    async function handleOAuthLogin() {
      const access_token = searchParams.get(TOKEN.ACCESS_TOKEN);
      const refresh_token = searchParams.get(TOKEN.REFRESH_TOKEN);

      if (access_token && refresh_token) {
        setTokens({ access_token, refresh_token });

        localStorage.setItem(TOKEN.ACCESS_TOKEN, access_token);
        localStorage.setItem(TOKEN.REFRESH_TOKEN, refresh_token);

        await getProfile();

        console.log({ profile });

        if (profile) {
          setProfile(profile);
          console.log({ profile });
          SuccessNotistackToast(`Welcome Back ${profile?.name} 😍!`);

          return router.push("/");
        }

        ErrorNotistackToast("Please Try Again 😢!");
      }
    }

    handleOAuthLogin();
  }, []);

  const { mutate: login, isPending: logInPending } = usePostMutationQuery<
    Profile & { access_token: string; refresh_token: string },
    LogInType
  >({
    url: urls.signIn,
  });

  const handleSignIn = (formValue: LogInType) => {
    login(formValue, {
      onSuccess: (data) => {
        setProfile(data);
        localStorage.setItem(TOKEN.ACCESS_TOKEN, data.access_token);
        localStorage.setItem(TOKEN.REFRESH_TOKEN, data.refresh_token);
        router.push("/");
      },
    });
  };

  return (
    <SignInUpLayout>
      <FormProvider {...form}>
        <form
          onSubmit={(e) => form.handleSubmit(handleSignIn)(e)}
          className="flex relative z-[1] flex-col gap-10 w-full md:w-2/3 xl:w-1/2 2xl:w-1/3 bg-white p-10 rounded-2xl dark:bg-slate-950"
        >
          <h1 className="text-center text-3xl">
            Welcome to <br />
            <p className="heading-highlight tracking-[2px] p-2 font-extrabold">
              NEST JS DEMO
            </p>
          </h1>
          <div className="flex flex-col items-center">
            <h1 className="bg-radial-red text-3xl font-semibold text-[#333] dark:text-gray-200">
              Sign in
            </h1>
            <p className="mt-5 text-[#666]">To access your account</p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <AnimatedInput
              name="email"
              label="Email"
              className="w-full border-[2px]"
              type="text"
              defaultValue={
                config.DEV_MODE === "1"
                  ? config.LOGIN_EMAIL
                  : form.getValues("email")
              }
            />
            <AnimatedInput
              name="password"
              label="Password"
              type="password"
              showPasswordButton
              className="w-full border-[2px]"
              defaultValue={
                config.DEV_MODE === "1"
                  ? config.LOGIN_PASSWORD
                  : form.getValues("password")
              }
            />
            <button type="submit" className="w-full">
              <SubmitButtonDefault
                className={`relative rounded-lg ${
                  logInPending && " submit-animation "
                }`}
              >
                Sign In
              </SubmitButtonDefault>
            </button>
          </div>

          <div className="pt-1 bg-gray-100 rounded-full" />

          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => {
                // fetchOAuthUrl();
                window.open(oAuthUrl);
              }}
              className="flex items-center gap-3 px-5 p-2 border justify-center transition-all duration-200 w-fit rounded-lg hover:bg-slate-200 dark:bg-white dark:hover:bg-gray-200"
            >
              <Image src={"./logo/google_logo.svg"} height={25} width={25} />
              <p>Continue With Google</p>
            </button>
          </div>

          <div className="flex items-center justify-center gap-5">
            <Link
              className="rounded-full bg-black p-2 px-5 text-center text-white hover:bg-gray-500 dark:bg-gray-300 dark:text-black "
              href={"/sign-up"}
            >
              Sign up
            </Link>
          </div>
        </form>
      </FormProvider>
    </SignInUpLayout>
  );
}
