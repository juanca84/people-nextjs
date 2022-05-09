import Image from "next/image";
import { useRouter } from "next/router";
import Container from "../components/container";
import Fetch from "isomorphic-fetch";

const User = (props) => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md3">
          <div className="card">
            <div className="card-header text-center">
              <Image
                src={props.user.avatar}
                alt={props.user.first_name}
                width={128}
                height={128}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="card-body text-center">
                <h3>
                    {props.user.id}. {props.user.first_name} {props.user.last_name}
                </h3>
                <p>
                    Email:  {props.user.email}
                </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
User.getInitialProps = async (ctx) => {
  console.log('1231', ctx.query);
  const res = await Fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();
  return { user: resJSON.data };
};

export default User;
