import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              I'm baby taxidermy lyft microdosing aesthetic yr put a bird on it.
              Roof party keffiyeh pug lo-fi. Hell of pop-up chicharrones yuccie,
              bicycle rights selvage la croix retro kitsch chambray taxidermy
              celiac food truck. Street art literally kogi, heirloom banh mi
              cred tilde fit schlitz williamsburg waistcoat prism yuccie. Migas
              vegan beard selvage wayfarers, blog affogato photo booth synth
              yuccie. Organic flannel ennui pork belly fit.
            </p>
            <p>
              Freegan selvage hashtag godard taiyaki pour-over viral big mood
              keytar Brooklyn, ramps yr air plant messenger bag. Franzen photo
              booth gochujang semiotics. Echo park YOLO authentic lo-fi subway
              tile quinoa. Meh chicharrones poutine drinking vinegar
              thundercats, pug tumblr jianbing activated charcoal humblebrag
              everyday carry butcher air plant green juice.
            </p>
            <p>
              Roof party umami thundercats deep v viral tbh, swag poutine beard
              taxidermy. Fam snackwave mustache, af meditation bushwick crucifix
              knausgaard man bun. Raclette mixtape cornhole, craft beer tacos
              glossier selfies mlkshk kombucha roof party plaid. Enamel pin deep
              v marfa banjo try-hard tote bag venmo raclette schlitz meh tilde.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xrgvaydo"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesource!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Contact;
