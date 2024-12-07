import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "libraries/common/button"
import { Input } from "libraries/common/input"
import { LogoText } from "libraries/logo/logo-text"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { RoutePath } from "routers/config"
import { useSignInWithEmailPass } from "utils/api/auth"
import { isFetchError } from "utils/api/common"
import * as zod from "zod"

interface ILoginForm {
  email: string
  password: string
}

export default function LoginPage() {
  const schema = zod.object({
    email: zod.string().email("Email invalid"),
    password: zod.string().min(1, "Password must be required"),
  })
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || RoutePath.HomePage

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<ILoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  })

  const { mutateAsync, isPending } = useSignInWithEmailPass()

  const onSubmit = async ({ email, password }: ILoginForm) => {
    await mutateAsync(
      {
        email,
        password,
      },
      {
        onError: (error: any) => {
          if (isFetchError(error)) {
            if (error.status === 401) {
              setError("email", {
                type: "manual",
                message: error.message,
              })

              return
            }
          }

          setError("root.serverError", {
            type: "manual",
            message: error.message,
          })
        },
        onSuccess: () => {
          navigate(from, { replace: true })
        },
      }
    )
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="rounded-lg bg-white shadow-auth pt-6 pb-5 px-4 flex flex-col gap-6 items-center justify-center min-w-[382px]">
        <LogoText className="!w-[127px] !h-[45px]" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              label="Password"
              type="password"
              error={errors.password?.message}
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <Button
              type="submit"
              text="Login"
              className="w-full"
              isLoading={isPending}
            />
            <Link
              to={RoutePath.ForgotPassword}
              className="text-small font-medium text-ui-fg-interactive"
            >
              Forgot password
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
