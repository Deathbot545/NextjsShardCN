import Image from "next/image";
import { cookies } from "next/headers"
import { Mail } from "@/components//mail/mail";
import { accounts, mails } from "@/components/mail/mail-data";
export default function Mails(){
    const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")
    return(
        <>
        <div className="md:hidden">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <Mail
                    accounts={accounts}
                    mails={mails}
                    navCollapsedSize={4} defaultLayout={undefined}        />
      </div>
        </>
    )
}