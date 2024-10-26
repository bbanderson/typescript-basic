import React from "react";

const MyPage = async ({
  params,
  searchParams,
}: {
  params: { studentId: string };
  searchParams: {
    page: string;
  };
}) => {
  const res = await fetch("http://localhost:3000/api/student", {});

  const result = await res.json();
  return (
    <div>
      {params.studentId} 페이지 - {searchParams.page}
      {JSON.stringify(result)}
    </div>
  );
};

export default MyPage;
