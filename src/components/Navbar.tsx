"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SolutionVisual from "@/components/SolutionVisual";
import { solutions } from "@/lib/solutions";
import { ChevronDown, Menu, Radio, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [activeSolutionSlug, setActiveSolutionSlug] = useState<string>(() => solutions[0]?.slug ?? "");
  const [desktopMenuOpen, setDesktopMenuOpen] = useState<string>("");

  const activeSolution = solutions.find((s) => s.slug === activeSolutionSlug) ?? solutions[0];
  const activeIndex = Math.max(
    0,
    solutions.findIndex((s) => s.slug === (activeSolution?.slug ?? "")),
  );
  const activeAccent = activeIndex % 3 === 0 ? "blue" : activeIndex % 3 === 1 ? "teal" : "violet";

  const getSummary = (text: string) => {
    const trimmed = text.trim();
    const firstSentence = trimmed.includes(".") ? `${trimmed.split(".")[0]}.` : trimmed;
    if (firstSentence.length <= 92) return firstSentence;
    return `${firstSentence.slice(0, 89)}...`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Radio className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ZamaTrack</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu
              className="z-50 w-full max-w-none"
              value={desktopMenuOpen}
              onValueChange={setDesktopMenuOpen}
            >
              <NavigationMenuList className="space-x-8 justify-center">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem value="solutions">
                  <NavigationMenuTrigger
                    className="h-auto bg-transparent px-0 py-0 text-muted-foreground hover:bg-transparent hover:text-foreground data-[state=open]:bg-transparent data-[state=open]:text-foreground"
                    onPointerEnter={(e) => e.preventDefault()}
                    onPointerLeave={(e) => e.preventDefault()}
                    onPointerMove={(e) => e.preventDefault()}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[1200px] max-w-[calc(100vw-3rem)] p-6">
                      <div className="grid grid-cols-[340px_1fr] gap-8">
                        <div className="grid gap-4">
                          <div className="rounded-2xl border border-border bg-secondary/30 p-5">
                            {activeSolution && (
                              <div className="grid gap-4">
                                <div className="flex items-start gap-3">
                                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/60 ring-1 ring-border">
                                    <activeSolution.icon className="h-5 w-5 text-foreground" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-sm font-semibold text-foreground">{activeSolution.name}</div>
                                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                      {getSummary(activeSolution.shortDescription)}
                                    </div>
                                  </div>
                                </div>

                                <div className="group">
                                  <SolutionVisual variant="dashboard" accent={activeAccent} frameClassName="h-28" />
                                </div>

                                <div className="flex gap-2">
                                  <Button asChild size="sm" className="flex-1">
                                    <Link href={`/solutions/${activeSolution.slug}`} onClick={() => setDesktopMenuOpen("")}>View solution</Link>
                                  </Button>
                                  <Button asChild size="sm" variant="outline" className="flex-1">
                                    <Link href="/contact" onClick={() => setDesktopMenuOpen("")}>Request a demo</Link>
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="rounded-2xl border border-border bg-secondary/30 p-5">
                            <div className="text-sm font-semibold text-foreground">Platform Solutions</div>
                            <div className="mt-2 text-sm text-muted-foreground">
                              Choose the modules you need to standardize operations, reduce risk, and prove compliance.
                            </div>
                            <div className="mt-5 grid gap-2">
                              <Button asChild size="sm">
                                <Link href="/solutions" onClick={() => setDesktopMenuOpen("")}>View all solutions</Link>
                              </Button>
                              <Button asChild size="sm" variant="outline">
                                <Link href="/contact" onClick={() => setDesktopMenuOpen("")}>Request a demo</Link>
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="min-w-0 pr-2">
                          <div className="grid grid-cols-3 gap-2">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.slug}
                                href={`/solutions/${solution.slug}`}
                                onClick={() => setDesktopMenuOpen("")}
                                onMouseEnter={() => setActiveSolutionSlug(solution.slug)}
                                onFocus={() => setActiveSolutionSlug(solution.slug)}
                                className={`group rounded-2xl border border-transparent p-4 min-h-[96px] transition-colors hover:bg-secondary/40 ${solution.slug === activeSolutionSlug ? "bg-secondary/40" : ""
                                  }`}
                              >
                                <div className="flex items-start gap-4">
                                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/60 ring-1 ring-border group-hover:bg-secondary">
                                    <solution.icon className="h-5 w-5 text-foreground" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-[15px] font-semibold text-foreground leading-snug">{solution.name}</div>
                                    <div className="mt-1 text-sm text-muted-foreground truncate">
                                      {getSummary(solution.shortDescription)}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/#products" className="text-muted-foreground hover:text-foreground transition-colors">
                      Equipment Store
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                      Contact Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  setIsSolutionsOpen(false);
                }}
              >
                Home
              </Link>

              <button
                type="button"
                className="flex items-center justify-between text-left text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsSolutionsOpen((v) => !v)}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isSolutionsOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {isSolutionsOpen && (
                <div className="pl-4 grid gap-2">
                  <Link
                    href="/solutions"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                      setIsSolutionsOpen(false);
                    }}
                  >
                    View all solutions
                  </Link>
                  {solutions.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/solutions/${solution.slug}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsSolutionsOpen(false);
                      }}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/#products"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  setIsSolutionsOpen(false);
                }}
              >
                Equipment Store
              </Link>

              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  setIsSolutionsOpen(false);
                }}
              >
                Contact Us
              </Link>

              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1">Sign In</Button>
                <Button className="flex-1">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
