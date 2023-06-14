import { getBreadCrumbLinks } from "@/utils";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";

interface BreadCrumbProps {
  asPath: string;
}

export const BreadCrumb = ({ asPath }: BreadCrumbProps) => {
  const finalLinksArray = getBreadCrumbLinks(asPath);

  return (
    <Breadcrumb
      w="full"
      fontSize="xs"
      separator={<HiOutlineChevronRight color="gray.500" />}
    >
      {finalLinksArray.map((link) => (
        <BreadcrumbItem key={link.href}>
          <BreadcrumbLink as={NextLink} href={link.href}>
            {link.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
