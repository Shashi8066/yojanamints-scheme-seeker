import { useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { GitCompare, ExternalLink, Users, IndianRupee, FileText, MapPin } from "lucide-react";

const SchemeComparison = () => {
  const [schemeA, setSchemeA] = useState("");
  const [schemeB, setSchemeB] = useState("");
  const [comparison, setComparison] = useState<any>(null);

  const schemes = [
    { id: "pmkisan", name: "PM Kisan Samman Nidhi", category: "Agriculture" },
    { id: "ujjwala", name: "PM Ujjwala Yojana", category: "Women Welfare" },
    { id: "pmay", name: "PM Awas Yojana", category: "Housing" },
    { id: "mudra", name: "PM Mudra Yojana", category: "Employment" },
    { id: "ayushman", name: "Ayushman Bharat", category: "Healthcare" },
    { id: "jandhan", name: "PM Jan Dhan Yojana", category: "Financial Inclusion" },
    { id: "sukanya", name: "Sukanya Samriddhi Yojana", category: "Women Welfare" },
    { id: "atal", name: "Atal Pension Yojana", category: "Pension" }
  ];

  const schemeData = {
    pmkisan: {
      name: "PM Kisan Samman Nidhi",
      targetGroup: "Small & Marginal Farmers",
      maxBenefit: "₹6,000/year",
      benefitType: "Direct Cash Transfer",
      stateSupported: "All States",
      documentsNeeded: "Aadhaar, Land Records",
      portal: "pmkisan.gov.in",
      launched: "2019",
      description: "Financial support to farmers for buying seeds, fertilizers, and other inputs"
    },
    ujjwala: {
      name: "PM Ujjwala Yojana",
      targetGroup: "BPL Women",
      maxBenefit: "₹6,400/year",
      benefitType: "LPG Connection + Subsidies",
      stateSupported: "All States",
      documentsNeeded: "Ration Card, Aadhaar",
      portal: "pmuy.gov.in",
      launched: "2016",
      description: "Free LPG connections and subsidized refills for clean cooking"
    },
    pmay: {
      name: "PM Awas Yojana",
      targetGroup: "Homeless & Inadequate Housing",
      maxBenefit: "₹2.67 lakh subsidy",
      benefitType: "Interest Subsidy/Grant",
      stateSupported: "All States",
      documentsNeeded: "Income Certificate, Aadhaar",
      portal: "pmaymis.gov.in",
      launched: "2015",
      description: "Affordable housing through credit linked subsidy and direct grants"
    },
    mudra: {
      name: "PM Mudra Yojana",
      targetGroup: "Micro Entrepreneurs",
      maxBenefit: "₹10 lakh loan",
      benefitType: "Collateral-free Loans",
      stateSupported: "All States",
      documentsNeeded: "Business Plan, Identity Proof",
      portal: "mudra.org.in",
      launched: "2015",
      description: "Funding support for non-corporate small business sector"
    },
    ayushman: {
      name: "Ayushman Bharat",
      targetGroup: "Vulnerable Families",
      maxBenefit: "₹5 lakh/family/year",
      benefitType: "Health Insurance",
      stateSupported: "32 States/UTs",
      documentsNeeded: "SECC Database Verification",
      portal: "pmjay.gov.in",
      launched: "2018",
      description: "Comprehensive health coverage for hospitalization expenses"
    },
    jandhan: {
      name: "PM Jan Dhan Yojana",
      targetGroup: "Unbanked Population",
      maxBenefit: "₹2 lakh insurance",
      benefitType: "Banking Services + Insurance",
      stateSupported: "All States",
      documentsNeeded: "Any Identity Proof",
      portal: "pmjdy.gov.in",
      launched: "2014",
      description: "Financial inclusion through bank accounts and insurance"
    },
    sukanya: {
      name: "Sukanya Samriddhi Yojana",
      targetGroup: "Girl Child (Under 10)",
      maxBenefit: "₹1.5 lakh/year deposit",
      benefitType: "Savings Scheme",
      stateSupported: "All States",
      documentsNeeded: "Birth Certificate, Parent's ID",
      portal: "nsiindia.gov.in",
      launched: "2015",
      description: "Small deposit scheme for girl child with attractive interest rates"
    },
    atal: {
      name: "Atal Pension Yojana",
      targetGroup: "Unorganized Sector Workers",
      maxBenefit: "₹5,000/month pension",
      benefitType: "Pension Scheme",
      stateSupported: "All States",
      documentsNeeded: "Aadhaar, Bank Account",
      portal: "npscra.nsdl.co.in",
      launched: "2015",
      description: "Guaranteed pension scheme for workers in unorganized sector"
    }
  };

  const compareSchemes = () => {
    if (schemeA && schemeB && schemeA !== schemeB) {
      setComparison({
        schemeA: schemeData[schemeA as keyof typeof schemeData],
        schemeB: schemeData[schemeB as keyof typeof schemeData]
      });
    }
  };

  const resetComparison = () => {
    setSchemeA("");
    setSchemeB("");
    setComparison(null);
  };

  const ComparisonRow = ({ label, valueA, valueB, icon }: any) => {
    const IconComponent = icon;
    const isDifferent = valueA !== valueB;
    
    return (
      <div className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100 last:border-b-0">
        <div className="flex items-center text-sm font-medium text-gray-700">
          <IconComponent className="w-4 h-4 mr-2 text-gray-500" />
          {label}
        </div>
        <div className={`text-sm ${isDifferent ? 'font-medium text-blue-700' : 'text-gray-600'}`}>
          {valueA}
        </div>
        <div className={`text-sm ${isDifferent ? 'font-medium text-green-700' : 'text-gray-600'}`}>
          {valueB}
        </div>
        <div className="text-center">
          {isDifferent && <Badge variant="outline" className="text-xs">Different</Badge>}
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Government Scheme Comparison Tool - Compare Yojana Benefits | YojanaMints</title>
        <meta name="description" content="Compare two government schemes side-by-side to understand benefits, eligibility, and application processes. Free scheme comparison tool." />
        <meta name="keywords" content="scheme comparison, yojana comparison, government scheme compare, PM schemes comparison, benefits comparison" />
        <meta name="author" content="YojanaMints" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yojanamints.com/scheme-comparison" />
        
        <meta property="og:title" content="Government Scheme Comparison Tool - Compare Yojana Benefits" />
        <meta property="og:description" content="Compare two government schemes side-by-side to understand benefits, eligibility, and application processes." />
        <meta property="og:url" content="https://yojanamints.com/scheme-comparison" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Government Scheme Comparison Tool" />
        <meta name="twitter:description" content="Compare government schemes side-by-side to find the best benefits for you." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Scheme Comparison Tool
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare two government schemes side-by-side to understand their benefits, eligibility criteria, 
            and application processes. Make informed decisions based on detailed comparisons.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Schemes to Compare</CardTitle>
            <CardDescription>
              Choose two different government schemes to see a detailed side-by-side comparison
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Scheme A
                </label>
                <Select value={schemeA} onValueChange={setSchemeA}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select first scheme" />
                  </SelectTrigger>
                  <SelectContent>
                    {schemes.map((scheme) => (
                      <SelectItem key={scheme.id} value={scheme.id} disabled={scheme.id === schemeB}>
                        <div>
                          <div className="font-medium">{scheme.name}</div>
                          <div className="text-sm text-gray-500">{scheme.category}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Scheme B
                </label>
                <Select value={schemeB} onValueChange={setSchemeB}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select second scheme" />
                  </SelectTrigger>
                  <SelectContent>
                    {schemes.map((scheme) => (
                      <SelectItem key={scheme.id} value={scheme.id} disabled={scheme.id === schemeA}>
                        <div>
                          <div className="font-medium">{scheme.name}</div>
                          <div className="text-sm text-gray-500">{scheme.category}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={compareSchemes} 
                disabled={!schemeA || !schemeB || schemeA === schemeB}
                className="flex-1"
              >
                <GitCompare className="w-4 h-4 mr-2" />
                Compare Schemes
              </Button>
              <Button variant="outline" onClick={resetComparison}>
                Reset Selection
              </Button>
            </div>
          </CardContent>
        </Card>

        {comparison && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GitCompare className="w-5 h-5 text-blue-600 mr-2" />
                Scheme Comparison Results
              </CardTitle>
              <CardDescription>
                Detailed comparison between {comparison.schemeA.name} and {comparison.schemeB.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  {/* Header */}
                  <div className="grid grid-cols-4 gap-4 py-4 border-b-2 border-gray-200 bg-gray-50 rounded-t-lg px-4">
                    <div className="text-sm font-semibold text-gray-700">Feature</div>
                    <div className="text-sm font-semibold text-blue-700 text-center">
                      {comparison.schemeA.name}
                    </div>
                    <div className="text-sm font-semibold text-green-700 text-center">
                      {comparison.schemeB.name}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 text-center">Status</div>
                  </div>

                  {/* Comparison Rows */}
                  <div className="px-4">
                    <ComparisonRow
                      label="Target Group"
                      valueA={comparison.schemeA.targetGroup}
                      valueB={comparison.schemeB.targetGroup}
                      icon={Users}
                    />
                    <ComparisonRow
                      label="Max Benefit"
                      valueA={comparison.schemeA.maxBenefit}
                      valueB={comparison.schemeB.maxBenefit}
                      icon={IndianRupee}
                    />
                    <ComparisonRow
                      label="Benefit Type"
                      valueA={comparison.schemeA.benefitType}
                      valueB={comparison.schemeB.benefitType}
                      icon={GitCompare}
                    />
                    <ComparisonRow
                      label="State Coverage"
                      valueA={comparison.schemeA.stateSupported}
                      valueB={comparison.schemeB.stateSupported}
                      icon={MapPin}
                    />
                    <ComparisonRow
                      label="Documents Needed"
                      valueA={comparison.schemeA.documentsNeeded}
                      valueB={comparison.schemeB.documentsNeeded}
                      icon={FileText}
                    />
                    <ComparisonRow
                      label="Launched Year"
                      valueA={comparison.schemeA.launched}
                      valueB={comparison.schemeB.launched}
                      icon={Users}
                    />
                  </div>
                </div>
              </div>

              {/* Scheme Descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">About {comparison.schemeA.name}</h3>
                  <p className="text-sm text-blue-800 mb-3">{comparison.schemeA.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://${comparison.schemeA.portal}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Portal
                    </a>
                  </Button>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">About {comparison.schemeB.name}</h3>
                  <p className="text-sm text-green-800 mb-3">{comparison.schemeB.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://${comparison.schemeB.portal}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Portal
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <p className="text-sm text-yellow-800 font-medium mb-1">Important Note</p>
                <p className="text-sm text-yellow-700">
                  This comparison is based on available public data and may not reflect the most current scheme guidelines. 
                  Please visit official portals for the latest information and eligibility criteria.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default SchemeComparison;
