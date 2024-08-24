import React, { useContext } from "react";
import { Loading } from "../../components/Shared/Loading";
import { PageTitle } from "../../components/Shared/PageTitle";
import useUser from "../../hooks/useUser";
import { AuthContext } from "../../providers/AuthProvider";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, userLoading, userRefetch] = useUser.userDetails(user.email);

  if (userLoading) return <Loading />;

  return (
    <div>
      <PageTitle title={"My Profile"} />
      {userInfo?.name}
    </div>
  );
};
