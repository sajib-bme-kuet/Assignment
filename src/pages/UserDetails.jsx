import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Button from "../components/button/Button";
import { Helmet } from "react-helmet";
const UserDetails = () => {
  const navigate = useNavigate();
  const { user_type, id } = useParams();
  const userData = useSelector((state) => state.userDetails.data);
  return (
    <div>
      <Helmet>
        <title>Details of {userData?.first_name}</title>
        <meta
          property="og:title"
          content={`Details of {userData?.first_name}`}
        />
        <meta
          property="og:image"
          content={"https://api.unsplash.com/search/photos?page=1&query=man"}
        />
        <meta property="og:description" content={"Test"} />
      </Helmet>
      <h5>Details of {user_type}:</h5>
      <table>
        <tr>
          <td>ID</td>
          <td>{userData?.id}</td>
        </tr>
        <tr>
          <td>First Name</td>
          <td>{userData?.first_name}</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>{userData?.last_name}</td>
        </tr>
        <tr>
          <td>Employee Type</td>
          <td>{userData?.user_type}</td>
        </tr>
        <tr>
          <td>Division</td>
          <td>{userData?.division}</td>
        </tr>
        <tr>
          <td>District</td>
          <td>{userData?.district}</td>
        </tr>
      </table>
      <Button onClick={() => navigate(`../edit/${user_type}/${id}`)}>
        Edit
      </Button>
      <div>Share via</div>
      <div>
        <button>
          <a
            href={`https://www.facebook.com/sharer.php?u=pocoegg.com`}
            // href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
          >
            Facebook
          </a>
        </button>
        <button>
          <a
            href={`https://twitter.com/share?url=pocoegg.com&text=${userData?.first_name}`}
            // href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
