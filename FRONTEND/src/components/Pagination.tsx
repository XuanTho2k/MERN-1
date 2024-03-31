import React from "react";
import { Link, useSearchParams } from "react-router-dom";
type PaginationProps = {
  totalPages: number;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
}) => {
  const [params] = useSearchParams();
  const page = params.get("page");
  return (
    <>
      <div className="flex flex-row gap-[30px] cursor-pointer justify-center items-center mt-[80px]">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            to={`?page=${i + 1}`}
            className={`bg-[#F9F1E7] cursor-pointer px-[2rem] text-[20px] py-[1rem] hover:bg-[#B88E2F] hover:text-white  border rounded-[1rem] duration-300 ${
              parseInt(page || "1") === i + 1
                ? "bg-[#B88E2F] text-white"
                : ""
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Pagination;
