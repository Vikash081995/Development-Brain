"use client";
import {
  useParams,
  useRouter,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  console.log(router);
  console.log(searchParams);
  console.log(pathname);
  // demo getting value from search params
  const name = searchParams.get("name");
  console.log(name);

  return (
    <div>
      <div>`Show param value ${params.id}`</div>
      <button onClick={() => router.replace("/")}>Go to Home</button>
    </div>
  );
};

export default PropertyPage;
