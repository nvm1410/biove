import React, { Component } from "react";
import GalleryMore from "../Components/GalleryMore";
import StoryCard from "../Components/StoryCard";
import sideHeroImage from "../../src/assets/sideHeroImage.png";
class BioveAngelComponent extends Component {
    state = {
        pages: ["COMMUNITY", "CAMPAIGN", "TREES"],
      };
  renderTitle = () => {
    switch (this.props.pageSelected) {
      case 0:
        return "Top Angel communities";
      case 1:
        return "Top Active Campaign";
      case 2:
        return "Top Beloved Trees";
      default:
        return "Top Angel communities";
    }
  };
  renderStoryTitle = () => {
    switch (this.props.pageSelected) {
      case 0:
        return "Most like communities' stories";
      case 1:
        return "Most like campaign’s stories";
      case 2:
        return "Our stories";
    }
  };
  render() {
    const {pageSelected}=this.props
    
    const title = this.renderTitle();
    const storyTitle = this.renderStoryTitle();
    return (
      <div>
        <div style={{ marginBottom: "143px" }}>
          <div style={Styles.sideHeroImage}>
            <p style={Styles.sideHeroText}>
              Chúng tôi trân trọng sự đồng hành của các bạn{" "}
            </p>
          </div>
          <div style={Styles.sideNav}>
            {this.state.pages.map((page, i) => {
              if (i === pageSelected) {
                return (
                  <a
                    href="#"
                    style={{
                      ...Styles.sideNavLink,
                      ...Styles.sideNavLinkSelected,
                    }}
                  >
                    {page}
                  </a>
                );
              }
              return (
                <a href="#" style={Styles.sideNavLink}>
                  {page}
                </a>
              );
            })}
          </div>
          <p style={Styles.title}>{title}</p>
          <div style={Styles.galleryContainer}>
            {this.props.children}
            <GalleryMore></GalleryMore>
          </div>
        </div>
        <p style={Styles.title}>{storyTitle}</p>
        <div style={Styles.storyContainer}>
          <StoryCard
            title="Cây bàng ở môi trường ABC"
            name="Nguyễn Văn A"
            location="Lâm Đồng"
          ></StoryCard>
          <StoryCard
            title="Cây bàng ở môi trường ABC"
            name="Nguyễn Văn A"
            location="Lâm Đồng"
          ></StoryCard>
          <StoryCard
            title="Cây bàng ở môi trường ABC"
            name="Nguyễn Văn A"
            location="Lâm Đồng"
          ></StoryCard>
        </div>
        <div style={Styles.btnContainer}>
          <button style={Styles.loadMoreBtn}>Load more</button>
        </div>
      </div>
    );
  }
}
export default BioveAngelComponent;
const Styles = {
  sideHeroImage: {
    width: "100vw",
    height: "calc(100vw*469/1440)",
    left: "0",
    right: "0",
    top: "0",
    zIndex: "-1",
    backgroundImage: `url(${sideHeroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  sideHeroText: {
    fontSize: "32px",
    fontWeight: "500",
    color: "white",
    marginBottom: "0",
    position: "absolute",
    top: "200px",
    left: "165px",
  },
  sideNav: {
    marginLeft: "6%",
    width: "1126px",
    marginTop: "76px",
    height: "58px",
    backgroundColor: "#01A78E",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  sideNavLink: {
    marginBottom: "0",
    fontSize: "16px",
    fontWeight: "500",
    color: "white",
    width: "270px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sideNavLinkSelected: {
    padding: "12px 100px",
    background: "#C9E1DD",
    color: "black",
    borderRadius: "20px",
  },
  title: {
    fontSize: "50px",
    marginLeft: "7%",
    fontWeight: "500",
    marginTop: "77px",
    marginBottom: "87px",
  },
  galleryContainer: {
    marginLeft: "7%",
    width: "1108px",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  storyContainer: {
    marginLeft: "7%",
    width: "1108px",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "100px",
  },
  btnContainer: {
    marginLeft: "7%",
    width: "1108px",
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },
  loadMoreBtn: {
    border: "none",
    background: "#FF5200",
    color: "white",
    fontSize: "16px",
    width: "150px",
    height: "40px",
  },
};
