import { ReactNode } from "react";
import SectionHeader from "components/section-header";

interface Props {
  sectionTitle: string;
  sectionBody: ReactNode;
  headerIcon: ReactNode;
}

const Section = ({ sectionTitle, sectionBody, headerIcon }: Props) => (
  <>
    <SectionHeader title={sectionTitle} icon={headerIcon} />
    <>{sectionBody}</>
  </>
);

export default Section;
