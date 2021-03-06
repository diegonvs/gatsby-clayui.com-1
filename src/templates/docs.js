import React from "react";

export default function Docs({data, location}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <div className="docs">
            <main className="content">
                <div className="sidebar-offset">
                    <header>
                        <div className="clay-site-container container-fluid">
                            <h1>{frontmatter.title}</h1>
                        </div>
                    </header>

                    <div className="clay-site-container container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    dangerouslySetInnerHTML={{ __html: html }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export const pageQuery = graphql`
    query TemplateDocsMarkdown($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;