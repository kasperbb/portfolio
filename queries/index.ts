export const productsQuery = `
    *[_type == "project"] {
        _id,
        name,
        url,
        type,
        featured,
        "image": image.asset-> {
            url,
            metadata {
                lqip,
                palette {
                    dominant
                }
            }
        },
        "video": video.asset-> {
            url
        }
    }
`

export const skillsQuery = `
    {
        "proficient": *[_type == "skill" && skill_level == "proficient"] {
            _id,
            name,
            abbreviation,
            skill_level,
            url,
            "image": image.asset-> {
            url,
            metadata {
                    lqip,
                    palette {
                        dominant
                    }
                }
            }
        },
        "comfortable": *[_type == "skill" && skill_level == "comfortable"] {
            _id,
            name,
            abbreviation,
            skill_level,
            url,
            "image": image.asset-> {
            url,
            metadata {
                    lqip,
                    palette {
                        dominant
                    }
                }
            }
        },
        "exploring": *[_type == "skill" && skill_level == "exploring"] {
            _id,
            name,
            abbreviation,
            skill_level,
            url,
            "image": image.asset-> {
            url,
            metadata {
                    lqip,
                    palette {
                        dominant
                    }
                }
            }
        },
    }
`
export const contactInformationQuery = `
    *[_type == "contactInformation"] {
        email,
        phone,
        linkedIn,
        cv {
            ...,
            "file": file.asset->url
        }
    }
`
