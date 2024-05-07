import { UserProfile } from "@clerk/nextjs";
import { SignIn, useUser } from "@clerk/nextjs";

const UserProfilePage = () => {
  const { user } = useUser();

  if (!user) {
    return <SignIn />;
  }
  return (
    <div> <UserProfile path="/user-profile" /></div>
  )
}

export default UserProfilePage